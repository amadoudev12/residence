import { FaGoogle, FaMicrosoft,FaAmazon } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { SiBasecamp } from "react-icons/si";
const companies = [
    {
        name:"Google",
        logo:FaGoogle
    },
    {
        name:"Bookink.com",
        logo:TbBrandBooking
    },
    {
        name:"Basecamp",
        logo:SiBasecamp
    },
    {
        name:"Microsoft",
        logo:FaMicrosoft
    },{
        name:"Amazon",
        logo:FaAmazon
    }
]
const Home = () => {
  return (
    <div className="w-full px-7 mb-10">
        <section className="rounded-md bg-[url(/hero-2.jpg)] h-[70vh] bg-center bg-black flex flex-col justify-center items-center ">
            <h1 className="text-white max-sm:text-2xl mb-4 font-bold text-6xl text-center">Let's find a home <br /> that's perfect for you</h1>
            <p className="text-white max-sm:text-center ">Search confidently with your trusted source of homes for sale or rent.</p>
            <div className="flex bg-white mt-4 rounded-lg px-1 py-1 ">
                <input className="max-sm:w-full px-2 w-lg border-0 outline-0" type="text" placeholder="Enter an adress, city, or zip code" />
                <button className="hover:bg-violet-400 cursor-pointer flex items-center justify-center bg-violet-800 px-2 py-1 rounded-md">Search</button>
            </div>
        </section>
        <div className="flex flex-col items-center">
            <h2 className="text-center text-gray-500 mt-5 mb-5">Trusty by 20 000+ componies</h2>
            <div className="flex items-center  gap-7 flex-wrap ">
                {companies.map(({name, logo: Icon})=>(
                    <h1 key={name} className=" flex items-center flex-col text-gray-500">
                        <Icon className=" max-sm:text-[10px]"/>
                        <span className="text-3xl font-bold  max-sm:text-[10px] ">{name}</span>
                    </h1>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home