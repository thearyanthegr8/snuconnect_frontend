import Image from "next/image";
import logo from "../../../public/images/logo-white.svg";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center gap-4 lg:flex-row justify-evenly bg-[#121212]">
      <div className="flex flex-col h-24 lg:h-36 justify-center">
        <Image className="h-1/2 my-auto" src={logo} alt="SNU-Connect" />
      </div>
      <div className="bg-[url(/images/footer-yellow.png)] rounded-sm bg-cover">
        <div className="m-2 p-2 border-8 rounded-sm border-black px-20 sm:px-24 md:px-48 flex flex-col">
          <div className="bg-[#09733B] rounded-md m-1 p-1 ">
            <div className=" flex justify-between border border-white rounded-md m-0.5 py-2 px-4 gap-4 text-white">
              <div className="text-nowrap">Contact Us</div>
              <ArrowUp className="" strokeWidth={3} />
            </div>
          </div>
          <div className="bg-[#09733B] rounded-md m-1 p-1 ">
            <div className=" flex justify-between border border-white rounded-md m-0.5 py-2 px-4 gap-4 text-white">
              <div className="">Home</div>
              <ArrowLeft strokeWidth={3} />
            </div>
          </div>
          <div className="bg-[#09733B] rounded-md m-1 p-1 ">
            <div className=" flex justify-between border border-white rounded-md m-0.5 py-2 px-4 gap-4 text-white">
              <div className="">About</div>
              <ArrowDown strokeWidth={3} />
            </div>
          </div>
          <div className="bg-[#09733B] rounded-md m-1 p-1 ">
            <div className=" flex justify-between border border-white rounded-md m-0.5 py-2 px-4 gap-4 text-white">
              <div className="">Maps</div>
              <ArrowRight strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
