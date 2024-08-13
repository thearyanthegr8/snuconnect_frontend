import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="ml-[20rem] w-full px-8 py-12 bg-[#fafbfc] min-h-screen">
        {children}
      </section>
    </main>
  );
}

export default Layout;
