import prisma from "@/db/prisma"; // Adjust this import path if necessary
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, latitude, longitude } = await req.json();

  try {
    const stop = await prisma.stops.create({
      data: {
        Stop_name: name,
        lat: latitude,
        long: longitude,
      },
    });

    return NextResponse.json(
      { message: "Stop added successfully" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to add stop", details: e },
      { status: 500 }
    );
  }
}
