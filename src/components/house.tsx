import {houses} from "../../lib/data"
export default function House() {
  return (
    <div className="w-full px-7 mb-12">
        <section>
            <h1 className="text-center text-3xl text-gray-700 font-bold mb-2">Move to What Moves You</h1>
            <p className="text-center text-gray-500">Keep calm & travel on</p>
            <div className="w-full flex items-center justify-center gap-3 max-sm:grid max-sm:grid-cols-1">
                {houses.map((house)=>{
                    return (  
                        <div className="">
                                <img className="rounded-md mb-4" width={300} height={300}  src={house.img} alt={house.title} />
                            
                             <h2 className="font-bold mb-2 text-gray-600">{house.title}</h2>
                            <div className=" text-gray-500 "><span className="font-bold">{house.proportie}</span> proporties </div>
                        </div> 
                    )
                })}
            </div>
        </section>
    </div>
  )
}
