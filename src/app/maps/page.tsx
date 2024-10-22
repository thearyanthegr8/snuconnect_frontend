"use client";
import React from "react";
import Map from "@/components/_map";

export default function Page() {
  if (typeof window === "undefined") return null;
  else {
    return (
      <section className="w-full h-screen bg-red-100 relative">
        <Map />
      </section>
    );
  }
}
