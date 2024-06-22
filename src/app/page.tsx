import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import logo from "../../public/images/logo-white.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - SNU Connect",
  description: "",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* <div className="h-[20vh]"></div> */}
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="text-5xl font-semibold text-center">
          A journey of a{" "}
          <span className=" bg-gradient-to-r text-transparent bg-clip-text from-[#71191B] via-[#B02608] to-[#D73033]">
            thousand miles,{" "}
          </span>
          <br />
          begins with a{" "}
          <span className=" bg-gradient-to-r text-transparent bg-clip-text from-[#0054CF] to-[#002B69] ">
            single step
          </span>
        </div>
      </div>
      <p className="my-8 text-xl text-center">
        SNUConnect is here to make those long 8 AM walks from Mudumalai to
        D-Block easier. Keep track of all on-campus vehicles from right here!
      </p>
      <Button className="rounded-3xl bg-gradient-to-r font-semibold from-[#0054CF] to-[#002B69] ">
        Get started
        <MoveRight className="ml-2" />
      </Button>
      <div className="mt-12 flex gap-2.5 w-[90%]">
        <div className="w-1/3 flex flex-col gap-2.5 lg:w-1/5">
          <div className="h-[190px] sm:h-[380px] bg-[#0054CF] w-full rounded-md"></div>
          <div className="h-[190px] sm:h-[380px] bg-[#F88B0D] w-full rounded-md"></div>
        </div>
        <div className="w-1/3 flex flex-col gap-2.5 lg:w-1/5">
          <div className="h-[90px] sm:h-[180px]"></div>
          <div className="h-[190px] sm:h-[380px] bg-[#592488] w-full rounded-md"></div>
          <div className="h-[90px] sm:h-[190px] bg-[#2D8777] w-full rounded-md"></div>
        </div>
        <div className="w-1/3 flex flex-col gap-2.5 lg:w-1/5">
          <div className="h-[190px] sm:h-[380px] bg-[#CD1739] w-full rounded-md"></div>
          <div className="h-[190px] sm:h-[380px] bg-[#1B62A9] w-full rounded-md"></div>
        </div>
        <div className="w-1/5 flex-col gap-2.5 hidden lg:flex ">
          <div className="h-[180px]"></div>
          <div className="h-[380px] bg-[#F88B0D] w-full rounded-md"></div>
          <div className="h-[190px] bg-[#CD1739] w-full rounded-md"></div>
        </div>
        <div className="w-1/5 flex-col gap-2.5 hidden lg:flex">
          <div className="h-[380px] bg-[#2D8777] w-full rounded-md"></div>
          <div className="h-[380px] bg-[#592488] w-full rounded-md"></div>
        </div>
      </div>
      <div className="my-5 h-12 w-[90%] bg-[url(/images/white-dot-background.png)] bg-cover rounded-lg flex items-center">
        <Image
          className="h-full w-fit p-1.5 mx-1"
          src={logo}
          alt="snuconnect-logo"
        />
      </div>
      <div className="flex gap-2 w-[90%]">
        <div className="w-1/2 flex-col  hidden lg:flex">
          <div className="w-full h-[380px] flex flex-col">
            <div className="h-[90%] bg-[#F88B0D] rounded-md"></div>
            <div className="bg-[#F8F9FA] w-3/4 text-center mx-auto -translate-y-1/2 p-4 rounded-lg">
              Take a look at our journey, from a simple idea to fruition to make
              the lives of SNU Students a breeze. Keep track of all SNIoE Campus
              vehicles from right here and make travelling across campus as easy
              as tap, tap, tap!
            </div>
          </div>
          <div className="w-full h-[560px] flex flex-col my-6">
            <div className="h-[90%] bg-[#CD1739] rounded-md"></div>
            <div className="bg-[#F8F9FA] w-3/4 text-center mx-auto -translate-y-1/2 p-4 rounded-lg">
              Take a look at our journey, from a simple idea to fruition to make
              the lives of SNU Students a breeze. Keep track of all SNIoE Campus
              vehicles from right here and make travelling across campus as easy
              as tap, tap, tap!
            </div>
          </div>
        </div>
        <div className="w-1/2 flex-col  hidden lg:flex">
          <div className="w-full h-[560px] flex flex-col">
            <div className="h-[90%] bg-[#0054CF]  rounded-md"></div>
            <div className="bg-[#F8F9FA] w-3/4 text-center mx-auto -translate-y-1/2 p-4 rounded-lg">
              Take a look at our journey, from a simple idea to fruition to make
              the lives of SNU Students a breeze. Keep track of all SNIoE Campus
              vehicles from right here and make travelling across campus as easy
              as tap, tap, tap!
            </div>
          </div>
          <div className="w-full h-[380px] flex flex-col my-6">
            <div className="h-[90%] bg-[#CD1739] rounded-md"></div>
            <div className="bg-[#F8F9FA] w-3/4 text-center mx-auto -translate-y-1/2 p-4 rounded-lg">
              Wanna know more? Click here to check out our story
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
