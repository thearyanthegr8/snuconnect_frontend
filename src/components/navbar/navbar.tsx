import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute py-4 w-full flex justify-between px-20 z-[1000] bg-white shadow-md">
      <Image src={logo} alt="SNU-Connect" />
      <div className="flex font-bold gap-16">
        <Link className="my-auto h-fit text-lg" href="/">
          Home
        </Link>
        <Link className="my-auto h-fit text-lg" href="/routes">
          Routes
        </Link>
        <Link className="my-auto h-fit text-lg" href="/maps">
          Maps
        </Link>
        <Link className="my-auto h-fit text-lg" href="/about">
          About
        </Link>
      </div>
    </div>
  );
}
