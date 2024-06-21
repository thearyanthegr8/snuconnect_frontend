"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="absolute py-4 w-full flex justify-between px-12 z-[1000] bg-white shadow-md">
      <Image src={logo} alt="SNU-Connect" />
      <div className="flex font-bold justify-evenly w-1/3">
        <Link
          className={`my-auto h-fit text-lg underline-offset-4 decoration-2 decoration-[#0054CF] ${
            pathName == "/" ? "underline" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`my-auto h-fit text-lg underline-offset-4 decoration-2 decoration-[#0054CF] ${
            pathName == "/routes" ? "underline" : ""
          }`}
          href="/routes"
        >
          Routes
        </Link>
        <Link
          className={`my-auto h-fit text-lg underline-offset-4 decoration-2 decoration-[#0054CF] ${
            pathName == "/maps" ? "underline" : ""
          }`}
          href="/maps"
        >
          Maps
        </Link>
        <Link
          className={`my-auto h-fit text-lg underline-offset-4 decoration-2 decoration-[#0054CF] ${
            pathName == "/about" ? "underline" : ""
          }`}
          href="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
}
