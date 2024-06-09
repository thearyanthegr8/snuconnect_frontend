"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, MapPin, Route } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-[20rem] border-r-2 h-screen fixed px-4 pt-12 pb-8 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="relative w-full h-8">
          <Image src="/images/logo.svg" alt="SNUConnect" fill />
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/dashboard">
            <Button
              variant={pathname === "/dashboard" ? "secondary" : "ghost"}
              className="w-full justify-start flex items-center gap-2"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Button>
          </Link>
          <Link href="/dashboard/route">
            <Button
              variant={
                pathname.includes("/dashboard/route") ? "secondary" : "ghost"
              }
              className="w-full justify-start flex items-center gap-2"
            >
              <Route className="h-5 w-5" />
              <span>Route</span>
            </Button>
          </Link>
          <Link href="/dashboard/stops">
            <Button
              variant={
                pathname.includes("/dashboard/stops") ? "secondary" : "ghost"
              }
              className="w-full justify-start flex items-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              <span>Stops</span>
            </Button>
          </Link>
        </div>
      </div>
      <Link href="/dashboard">
        <Button
          variant={"secondary"}
          className="w-full justify-start flex items-center gap-2"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </Link>
    </nav>
  );
}

export default Sidebar;
