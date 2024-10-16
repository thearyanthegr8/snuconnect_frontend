import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.gPS.findMany({
    select: {
      id: true,
      LAT: true,
      LONG: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  const serializedData = data.map((item) => ({
    id: item.id.toString(), // Convert BigInt to String
    LAT: Number(item.LAT), // Convert BigInt to Number
    LONG: Number(item.LONG), // Convert BigInt to Number
  }));

  console.log(serializedData);

  return NextResponse.json(serializedData);
}
