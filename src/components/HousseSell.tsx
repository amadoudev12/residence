
import { houseSell } from "../../lib/data"
import { Button } from "../components/ui/button"
import { Card } from "./ui/card"
import "../App.css"
export default function HouseSell() {
  return (
    <div className="w-full px-7 mb-15">
        <section className="rounded-md bg-violet-50 ">
              <div className="flex justify-between items-center p-9 ">
                <div>
                    <h2 className="text-violet-800 font-bold">Come Now</h2>
                    <h1 className="text-gray-800 text-2xl font-bold">Live Who you Are.</h1>
                    <p className="text-gray-500 ">Own the Home Meant for You.</p>
                </div>
                <Button className="bg-violet-300 text-violet-900 cursor-pointer hover:bg-violet-900 hover:text-violet-50 px-2 py-1 rounded-md">See more</Button>
            </div>
            <div className="box flex items-center justify-center gap-3 max-sm:grid max-sm:grid-cols-2">
              {houseSell.map((house)=>(
                <Card className="card" >
                  <img src={house.img} height={100} width={200} alt={house.title} className="rounded-md mb-3" />
                  <h2 className="font-bold text-gray-700">{house.title}</h2>
                  <div className="flex items-center justify-between map">
                    <h2 className=" text-gray-500">{house.map}</h2>
                    <h2 className="text-violet-800 font-bold" >{house.price}</h2>
                  </div>
                </Card>
              ))}
            </div>
        </section>
    </div>
  )
}
