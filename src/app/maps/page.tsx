import React from "react";
import Map from "@/components/_map";

export default function Page() {
  return (
    <section className="w-full h-screen bg-red-100 relative">
      {/* <div className="z-[100] absolute top-0 left-0 w-full min-h-screen h-full flex justify-center items-center p-12">
        <h1 className="text-3xl font-bold text-white text-center">
        </h1>
      </div> */}
      <Map />
    </section>
  );
}
