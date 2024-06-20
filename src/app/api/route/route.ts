import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const routes = await prisma.route.findMany({
      select: {
        id: true,
        route_name: true,
        RouteStops: {
          select: {
            route_id: true,
            route: true,
            stops: true,
            stops_id: true,
            stop_order: true,
          },
        },
      },
    });

    return NextResponse.json(routes, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch routes", details: e },
      { status: 500 }
    );
  }
}
