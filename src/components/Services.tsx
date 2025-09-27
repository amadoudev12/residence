import { FaCommentDots } from "react-icons/fa";
import { RiStackshareLine } from "react-icons/ri";
import { TbPencilStar } from "react-icons/tb";
import { MdFamilyRestroom } from "react-icons/md";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
const services = [
    {
        icon:FaCommentDots,
        name:"Communication",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima provident molestias eveniet similique perferendis. Eligendi."
    },
    {
        icon:RiStackshareLine,
        name:"Communication",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima provident molestias eveniet similique perferendis. Eligendi."
    },
        {
        icon:TbPencilStar,
        name:"Communication",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima provident molestias eveniet similique perferendis. Eligendi."
    },
        {
        icon:MdFamilyRestroom,
        name:"Communication",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima provident molestias eveniet similique perferendis. Eligendi."
    },
]
export default function Services() {
return (
    <div className="w-full px-7 mb-15">
        <p></p>
        <section className="rounded-md bg-violet-50 ">
            <div className="flex justify-between items-center p-9 ">
                <div>
                    <h2 className="text-violet-800 font-bold">EMH.SO?</h2>
                    <h1 className="text-gray-800 text-2xl font-bold">What we do</h1>
                    <p className="text-gray-500 ">full-service Agents Modern Technology</p>
                </div>
                <Button className="bg-violet-300 text-violet-900 cursor-pointer hover:bg-violet-900 hover:text-violet-50 px-2 py-1 rounded-md">See more</Button>
            </div>
            <div className="box flex gap-2 px-3  max-md:grid max-md:grid-cols-2">
                {services.map(({icon:Icon, name, desc})=>{
                    return (
                        <Card className="justify-center items-center px-1.5">
                            <div className="bg-gray-200 p-2 rounded-full"><Icon className="text-2xl text-violet-600 "/></div>
                            <h1 className="font-bold">{name}</h1>
                            <p className="text-center">{desc}</p>
                        </Card>
                    )
                })}
            </div>
        </section>
    </div>
  )
}