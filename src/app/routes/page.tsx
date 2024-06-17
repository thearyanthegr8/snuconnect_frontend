import Image from "next/image";
import logo from "../../../public/images/logo-white.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Routes - SNU Connect",
  description: "",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="min-h-screen flex flex-col justify-evenly xl:flex-row xl:justify-between items-center w-[90%]">
        <div className="flex flex-col w-4/5">
          <span className="text-5xl font-semibold text-center">
            All Routes On Campus.
          </span>
          <span className="text-5xl font-semibold text-center">
            Shown in A Single Glance.
          </span>
          <span className="mt-4 text-xl text-center text-balance">
            View all scheduled routes for today, right here in a single glance.
            Whether its a golf cart from D-Block or a Mega Bus to Main Gate, we
            know exactly where it is!
          </span>
        </div>
        <div className="xl:mt-10 w-full xl:w-1/3 h-[30vh] md:h-[50vh] xl:h-[70vh] bg-[#F88B0D] rounded-lg"></div>
      </div>
      <div className="my-5 h-12 w-[90%] bg-[url(/images/white-dot-background.png)] bg-cover rounded-lg flex items-center">
        <Image
          className="h-full w-fit p-1.5 mx-1"
          src={logo}
          alt="snuconnect-logo"
        />
      </div>
    </div>
  );
}
