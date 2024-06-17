import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-4 w-full flex justify-between px-12 ">
      <Image src={logo} alt="SNU-Connect" />
      <div className="flex font-bold justify-evenly w-1/3">
          <Link className="my-auto h-fit text-lg" href="/">Home</Link>
          <Link className="my-auto h-fit text-lg" href="/routes">Routes</Link>
          <Link className="my-auto h-fit text-lg" href="/maps">Maps</Link>
          <Link className="my-auto h-fit text-lg" href="/about">About</Link>
      </div>
    </div>
  );
}
