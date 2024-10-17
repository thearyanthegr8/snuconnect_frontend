"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed py-4 w-full flex justify-between px-20 z-[1000] bg-white shadow-md">
      <Image src={logo} alt="SNU-Connect" />
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`font-bold gap-16 ${
          isOpen ? "flex" : "hidden"
        } md:flex w-full lg:w-auto absolute bg-white top-16 left-0 md:relative md:top-0 md:flex-row flex-col items-center py-8 shadow-md md:shadow-none md:py-0  md:gap-16 md:px-20 md:mr-0 md:ml-auto md:pr-0 md:pl-0 md:w-auto`}
      >
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
