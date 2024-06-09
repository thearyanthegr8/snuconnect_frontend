import prisma from "@/db/prisma"; // Adjust this import path if necessary
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { id, name, latitude, longitude } = await req.json();

  try {
    const stop = await prisma.stops.update({
      where: {
        id,
      },
      data: {
        Stop_name: name,
        lat: latitude,
        long: longitude,
      },
    });

    return NextResponse.json(
      { message: "Stop updated successfully" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to update stop", details: e },
      { status: 500 }
    );
  }
}
