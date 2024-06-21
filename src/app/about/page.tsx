import PersonCard from "@/components/person-card/person-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Image from "next/image";
import logo from "../../../public/images/logo-white.svg";

export const metadata: Metadata = {
  title: "About Us - SNU Connect",
  description: "",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="h-[10vh]"></div>
      <div className="flex flex-col items-center text-5xl font-bold text-center">
        <span>Meet our Team of Creators,</span>
        <span>Designers, and Problem Solvers!</span>
      </div>
      <div className="mt-6 flex flex-col">
        SNUConnect is here to make those long 8 AM walks from Mudumalai to
        D-Block easier. Keep track of all on-campus vehicles from right here!
      </div>
      <Tabs className="mt-8 w-[90%]" defaultValue="dev">
        <TabsList className="w-full justify-evenly">
          <TabsTrigger
            className="mt-4 text-lg rounded-2xl bg-[#A9AAAA] text-black w-[14%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
            value="marketing"
          >
            Marketing
          </TabsTrigger>
          <TabsTrigger
            className="mt-4 text-lg rounded-2xl bg-[#A9AAAA] text-black w-[14%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
            value="des"
          >
            UI/UX Design
          </TabsTrigger>
          <TabsTrigger
            className="mt-4 text-lg rounded-2xl bg-[#A9AAAA] text-black w-[14%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
            value="dev"
          >
            Development
          </TabsTrigger>
          <TabsTrigger
            className="mt-4 text-lg rounded-2xl bg-[#A9AAAA] text-black w-[14%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
            value="con"
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            className="mt-4 text-lg rounded-2xl bg-[#A9AAAA] text-black w-[14%] border border-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0054CF] data-[state=active]:to-[#002B69] data-[state=active]:text-white"
            value="photo"
          >
            Photography
          </TabsTrigger>
        </TabsList>
        <TabsContent value="marketing">
          <div className="w-full flex justify-evenly mt-8">
            <PersonCard className="w-[15%]" name="Lando Norris" />
            <PersonCard className="w-[15%]" name="Lando Norris" />
            <PersonCard className="w-[15%]" name="Lando Norris" />
            <PersonCard className="w-[15%]" name="Lando Norris" />
            <PersonCard className="w-[15%]" name="Lando Norris" />
          </div>
        </TabsContent>
        <TabsContent value="des" >
          <div className="w-full flex justify-evenly mt-8">
            <PersonCard className="w-[15%]" name="Charles Leclerc" />
            <PersonCard className="w-[15%]" name="Charles Leclerc" />
            <PersonCard className="w-[15%]" name="Charles Leclerc" />
            <PersonCard className="w-[15%]" name="Charles Leclerc" />
            <PersonCard className="w-[15%]" name="Charles Leclerc" />
          </div>
        </TabsContent>
        <TabsContent value="dev">
          <div className="w-full flex justify-evenly mt-8">
            <PersonCard className="w-[15%]" name="Max Verstappen" />
            <PersonCard className="w-[15%]" name="Max Verstappen" />
            <PersonCard className="w-[15%]" name="Max Verstappen" />
            <PersonCard className="w-[15%]" name="Max Verstappen" />
            <PersonCard className="w-[15%]" name="Max Verstappen" />
          </div>
        </TabsContent>
        <TabsContent value="con">
          <div className="w-full flex justify-evenly mt-8">
            <PersonCard className="w-[15%]" name="Lewis Hamilton" />
            <PersonCard className="w-[15%]" name="Lewis Hamilton" />
            <PersonCard className="w-[15%]" name="Lewis Hamilton" />
            <PersonCard className="w-[15%]" name="Lewis Hamilton" />
            <PersonCard className="w-[15%]" name="Lewis Hamilton" />
          </div>
        </TabsContent>
        <TabsContent value="photo">
          <div className="w-full flex justify-evenly mt-8">
            <PersonCard className="w-[15%]" name="Fernando Alonso" />
            <PersonCard className="w-[15%]" name="Fernando Alonso" />
            <PersonCard className="w-[15%]" name="Fernando Alonso" />
            <PersonCard className="w-[15%]" name="Fernando Alonso" />
            <PersonCard className="w-[15%]" name="Fernando Alonso" />
          </div>
        </TabsContent>
      </Tabs>
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
