"use client";
import React from "react";
import ETADisplay from "@/components/_eta-display";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/_map"), {
        loading: () => <span>Loading...</span>,
        ssr: false,
      }),
    []
  );
  if (typeof window === "undefined") return null;
  else {
    return (
      <section className="w-full relative">
        <Map />
        <ETADisplay />
      </section>
    );
  }
}
