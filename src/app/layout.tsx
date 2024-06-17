import { DM_Sans } from "next/font/google";
import "@/styles/root/globals.scss";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = DM_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F9FA]`} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
