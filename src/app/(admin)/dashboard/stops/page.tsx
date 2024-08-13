import React from "react";
import prisma from "@/db/prisma";
import StopsTable from "./stops-table";
import { DataTable } from "@/components/ui/data-table";
import { StopColumns } from "./columns";

async function fetchStops() {
  const response = await prisma.stops.findMany();

  return response;
}

async function Page() {
  const stops = await fetchStops();

  async function deleteStop(id: number) {
    console.log("Deleting Stop with ID: ", id);
    // await prisma.stops.delete({
    //   where: {
    //     id: id,
    //   },
    // });
  }

  return (
    <div>
      <DataTable columns={StopColumns} data={stops} name="Stops" />
    </div>
  );
}

export default Page;
