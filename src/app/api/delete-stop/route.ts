import prisma from "@/db/prisma"; // Adjust this import path if necessary
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const stop = await prisma.stops.deleteMany({
      where: {
        id: { in: ids },
      },
    });

    return NextResponse.json(
      { message: "Stop deleted successfully" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to delete stop", details: e },
      { status: 500 }
    );
  }
}
