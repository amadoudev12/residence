// import React from 'react'
import { useState } from "react";
import { IoIosFlash } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
const menu = [
    {
        name:"Home"
    },
    {
        name:"How it'is work"
    },
    {
        name:"Agent"
    },
    {
        name:"Sales"
    }
]
export default function NavBar() {
    const [menuActive, OpenMenu] = useState(false)
    console.log(menuActive)
  return (
    <nav className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-1">
            <IoIosFlash className="text-[25px] text-white bg-violet-600 rounded-full py-0.5"/>
            <h1 className="font-bold text-2xl text-gray-700"><span className="text-violet-600">Build</span>Estate</h1>
        </div>
        <ul className="flex items-center gap-3 max-sm:hidden">
            {menu.map((lien)=>(
                <li><a href="#" className="text-gray-400 hover:text-violet-600 transition">{lien.name}</a></li>
            ))}
        </ul>
        <div className="flex items-center gap-3 btn-top">
            <select className="text-gray-500 bg-gray-200 rounded-md px-3 py-1" name="" id="">
                <option value="usd">
                    <img src="/usa fla.webp" alt="" />
                    USD
                </option>
                <option value="usd">Franc</option>☻
            </select>
            <div className=" hover:bg-violet-400 cursor-pointer flex items-center justify-center bg-violet-800 px-2 py-1 rounded-md">
                 <button className="text-white  text-[15px] cursor-pointer">Contact Us</button>
            </div>
        </div>
        <TiThMenu onClick={()=>{OpenMenu(!menuActive)}} className={`${menuActive ? "hidden" : "block"} sm:hidden  text-2xl text-violet-500`}/>
        <IoClose onClick={()=>{OpenMenu(false)}} className={`${menuActive ? "block" : "hidden"} text-2xl text-violet-500`} />
        {menuActive && (
                <div className="w-[50%] px-3 absolute top-2 left-0 bg-white h-screen flex flex-col  pt-7 gap-6">
                    <div className="flex items-center gap-1">
                    <IoIosFlash className="text-[25px] text-white bg-violet-600 rounded-full py-0.5"/>
                    <h1 className="font-bold text-2xl text-gray-700"><span className="text-violet-600">Build</span>Estate</h1>
                </div>
                <ul className="flex justify-start gap-3  flex-col">
                    {menu.map((lien)=>(
                        <li><a href="#" className="text-gray-400 hover:text-violet-600 transition">{lien.name}</a></li>
                    ))}
                </ul>
            </div>
        )}
    </nav>
  )
}
