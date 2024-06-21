import { cn } from "@/lib/utils"

export default function PersonCard({className, name}:{className?: string, name?:string}){
    return(
        <div className={cn("border flex flex-col p-3 justify-center border-black border-opacity-20 rounded-lg", className)}>
            <div className="bg-[#CD1739] h-[190px] w-full rounded-lg"></div>
            <div className="mt-2 text-center">{name}</div>
        </div>
    )
}