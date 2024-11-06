import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const route = await prisma.stops.findMany();

    return NextResponse.json(route, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to get stops", details: e },
      { status: 500 }
    );
  }
}
