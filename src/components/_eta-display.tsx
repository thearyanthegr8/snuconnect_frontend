"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface RouteData {
  id: string;
  route_name: string;
}

export default function ETADisplay() {
  const [routeNames, setRouteNames] = useState<Map<string, string>>(new Map());
  const [routeIdToName, setRouteIdToName] = useState<Map<string, string>>();
  const [distances, setDistances] = useState<Map<string, any>>(new Map());

  async function route_name_fetch() {
    const response = await axios.get<RouteData[]>(
      "https://kyqgl7t327.execute-api.ap-south-1.amazonaws.com/prod/routes"
    );
    const temp_map = new Map<string, string>(
      response.data.map((route: RouteData) => [route.id, route.route_name])
    );
    const distancePromises = Array.from(temp_map.keys()).map(async (k) => {
      const dist_object = await axios.get(
        `https://kyqgl7t327.execute-api.ap-south-1.amazonaws.com/prod/distance?route_id=${k}`
      );
      return [k, dist_object.data];
    });
    const distanceResults = await Promise.all(distancePromises);
    let temp_map_2 = new Map();
    for (let x of distanceResults) {
      temp_map_2.set(x[0], x[1]);
    }
    setRouteNames(temp_map);
    setDistances(temp_map_2);
  }

  async function route_id_map() {
    const response = await axios.get("/api/stops");
    const temp_map = new Map<string, string>();
    for (const x of response.data) {
      temp_map.set(x.id, x.Stop_name);
    }
    setRouteIdToName(temp_map);
  }

  useEffect(() => {
    route_id_map();
    route_name_fetch();
    const interval = setInterval(route_name_fetch, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-8 space-y-2">
      {Array.from(distances).map(([id, dist]) => {
        return Object.entries(dist).map((e) => (
          <div>
            <div>{`Shuttle ${e[0]}`}</div>

            <div className="flex w-full justify-evenly">
              {(e[1] as any).map((f: any) => {
                console.log(e[1]);
                return Object.keys(f).map((g) => (
                  <div className="">{routeIdToName?.get(g)}</div>
                ));
              })}
            </div>
          </div>
        ));
      })}
    </div>
  );
}

// For future use
// {Array.from(routeNames).map(([id, name]) => (
//   <div key={id} className="flex flex-col">
//     {/* <div className="font-bold">{id}</div> */}
//     <div>{name}</div>
//   </div>
// ))}
