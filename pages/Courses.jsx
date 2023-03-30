import Image from "next/image"
import Vector from '../public/vectors/svg/Vector (4).svg'
import Card from "../components/Card"



const Courses = () => {
    return (
        <div id="courses" className="h-full pb-10 bg-gen-gray">
            <div className="grid justify-center text-center">
                <h1 className="text-[3rem] font-clash font-semibold">Browse Our Popular Courses</h1>
                <p className="font-sans w-[40rem] text-sm w- text-gen-ash">High-Defination Video Is Video Of Higher 
                Resolution And Quality Than Standard Definition. While 
                There’s No Standard Meaning For High Definition, Generally 
                Any Standard Video Image
                </p>
            </div>
            <div className="px-[7rem] ">
                <Image src={Vector} width={30} />
            </div>
            <div className="flex items-center justify-center gap-20 text-sm font-satoshi text-gen-ash">
                <span className="p-2 hover:p-2 hover:bg-white hover:rounded">All categories</span>
                <span className="p-2 hover:p-2 hover:bg-white hover:rounded">Design</span>
                <span className="p-2 hover:p-2 hover:bg-white hover:rounded">Development</span>
                <span className="p-2 hover:p-2 hover:bg-white hover:rounded">Marketing</span>
            </div>
            <div className="grid grid-cols-3 px-[5rem] py-8 gap-4">
                {Array(6).fill("").map((el, i) => <Card key={'card'+i+1} />)}
            </div>
            <div className="flex justify-center text-sm font-satoshi">
                <span className="px-5 py-4 text-white rounded bg-gen-blue">Explore All Courses</span>
            </div>
        </div>
    )
}



export default Courses