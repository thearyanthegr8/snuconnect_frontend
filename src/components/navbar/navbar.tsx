import Image from "next/image"
import logo from "../../../public/images/logo.svg"

export default function Navbar(){
    return (
        <div className="w-full flex justify-between px-12 pt-4">
            
            <Image src={logo} alt="SNU-Connect"/>
            <div className="flex font-bold justify-evenly w-1/3">
                <div className="my-auto">Home</div>
                <div className="my-auto">Routes</div>
                <div className="my-auto">Maps</div>
                <div className="my-auto">About</div>
            </div>
        </div>
    )
}