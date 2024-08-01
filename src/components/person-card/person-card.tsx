import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PersonCard({
  className,
  name,
  imageurl,
}: {
  className?: string;
  name: string;
  imageurl?: string;
}) {
  return (
    <div
      className={cn(
        "border flex flex-col p-3 justify-center border-black border-opacity-20 rounded-lg",
        className
      )}
    >
      <div className="bg-[#CD1739] h-[190px] w-full rounded-lg relative overflow-hidden">
        <Image
          src={`/images/teams/${imageurl}`}
          alt={name}
          fill
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="mt-2 text-center">{name}</div>
    </div>
  );
}
