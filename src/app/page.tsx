import React from "react";
import Image from "next/image";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

function Page() {
  return (
    <div className="flex justify-center items-center flex-col max-h-screen gap-4 h-screen relative">
      <Image
        src={"/images/logo.svg"}
        alt="SNU-Connect"
        width={400}
        height={200}
      />
      <h1 className="text-xl font-bold">Coming Soon</h1>

      {/* <div className="relative"> */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-y-[-30%] h-[150%] skew-y-12"
        )}
      />
      {/* </div> */}
    </div>
  );
}

export default Page;
