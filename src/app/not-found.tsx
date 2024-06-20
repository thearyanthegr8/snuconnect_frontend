import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-2 text-center">
      <h1 className="text-6xl">Error 404</h1>
      <h2 className="text-3xl">Page is not found :(</h2>
      <Link href="/" className="underline mt-4">
        Go back to home
        <ArrowRight className="inline-block" size={16} />
      </Link>
    </section>
  );
}

export default NotFound;
