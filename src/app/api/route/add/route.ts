import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { route_name } = await req.json();

  try {
    const route = await prisma.route.create({
      data: {
        route_name,
      },
    });

    return NextResponse.json({ id: route.id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to create stop", details: e },
      { status: 500 }
    );
  }
}
