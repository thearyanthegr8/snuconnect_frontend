import PersonCard from "@/components/person-card/person-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Image from "next/image";
import logo from "../../../public/images/logo-white.svg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "About Us - SNU Connect",
  description: "",
};

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        {/* <div className="h-[10vh]"></div> */}
        <div className="flex flex-col items-center text-5xl font-bold text-center">
          <span>Meet our Team of Creators,</span>
          <span>Designers, and Problem Solvers!</span>
        </div>
        <div className="mt-6 flex flex-col self-center text-center">
          SNUConnect is here to make those long 8 AM walks from Mudumalai to
          D-Block easier. Keep track of all on-campus vehicles from right here!
        </div>
        <Tabs className="mt-8 w-[90%]" defaultValue="dev">
          <ScrollArea>
            <TabsList className="my-2 w-full justify-evenly gap-4">
              <TabsTrigger
                className="lg:text-lg rounded-full bg-[#A9AAAA] text-black w-[17%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
                value="marketing"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger
                className="lg:text-lg rounded-full bg-[#A9AAAA] text-black w-[17%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
                value="des"
              >
                UI/UX Design
              </TabsTrigger>
              <TabsTrigger
                className="lg:text-lg rounded-full bg-[#A9AAAA] text-black w-[17%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
                value="dev"
              >
                Development
              </TabsTrigger>
              <TabsTrigger
                className="lg:text-lg rounded-full bg-[#A9AAAA] text-black w-[17%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
                value="founder"
              >
                Founder
              </TabsTrigger>
              <TabsTrigger
                className="lg:text-lg rounded-full bg-[#A9AAAA] text-black w-[17%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
                value="ideation"
              >
                Ideation
              </TabsTrigger>
              <TabsTrigger
                className="lg:text-lg rounded-full bg-[#A9AAAA] text-black w-[17%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
                value="videography"
              >
                Videography
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" forceMount />
          </ScrollArea>
          <TabsContent
            value="marketing"
            className="w-full flex justify-evenly mt-8 flex-wrap"
          >
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Ujjwal Mishra"
              imageurl="Ujjwal Mishra - Marketing.jpg"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Vedant"
              imageurl="Vedant - Marketing.jpeg"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Bhavya"
              imageurl="Bhavya - Marketing.jpeg"
            />
          </TabsContent>
          <TabsContent
            value="des"
            className="w-full flex justify-evenly  flex-wrap"
          >
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Neeloy Adhikary"
              imageurl="Neeloy Adhikary - Design.jpg"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Rohan Reddy"
              imageurl="Rohan Reddy - Design.png"
            />
          </TabsContent>
          <TabsContent
            value="dev"
            className="w-full flex justify-evenly  flex-wrap"
          >
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Aryan Tomar"
              imageurl="Aryan Tomar - Development.jpg"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Mudit Gupta"
              imageurl="Mudit Gupta - Development.webp"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Musham Varun"
              imageurl="Varun Musham - Development.png"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Karthik Raj"
              imageurl="Karthik Raj R-Development.jpg"
            />
          </TabsContent>
          <TabsContent
            value="founder"
            className="w-full flex justify-evenly  flex-wrap"
          >
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Pavan Karthikeya Reddy"
              imageurl="Pavan - Founder.jpeg"
            />
          </TabsContent>
          <TabsContent
            value="ideation"
            className="w-full flex justify-evenly  flex-wrap"
          >
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Amey Gautam"
              imageurl="Amey Gautam - Marketing.jpg"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Prithviraj Jhunjhunwala"
              imageurl="Prithviraj Jhunjhunwala.png"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Adhityanarayan Ramkumar"
              imageurl="Adhityanarayan Ramkumar - Ideation.JPEG"
            />
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Shreyansh"
              imageurl=""
            />
          </TabsContent>
          <TabsContent
            value="videography"
            className="w-full flex justify-evenly  flex-wrap"
          >
            <PersonCard
              className="w-[15%] my-2 min-w-[140px]"
              name="Abhay Singh"
              imageurl="Abhay Singh - Videography.jpg"
            />
          </TabsContent>
        </Tabs>
      </div>
      <div className="my-5 h-12 w-[90%] bg-[url(/images/white-dot-background.png)] bg-cover rounded-lg self-center flex items-center">
        <Image
          className="h-full w-fit p-1.5 mx-1"
          src={logo}
          alt="snuconnect-logo"
        />
      </div>
    </div>
  );
}
