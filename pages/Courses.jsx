import Image from "next/image"
import Vector from '../public/vectors/svg/Vector (4).svg'
import Card from "../components/Card"
import { useState } from "react"
import { courses } from "../components/courses"




const Courses = () => {

    const [display, setDisplay] = useState(courses)

    const handleFilter = (tag) => {
        const filteredCards =
          tag === 'All Categories'? courses: courses.filter((course) => course.tag === tag);
        setDisplay(filteredCards);
      };
    


    
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
                <Image src={Vector} width={30} alt="vector" />
            </div>
            <div className="flex items-center justify-center gap-20 text-sm font-satoshi text-gen-ash">
                {['All Categories', 'Design', 'Marketing', 'Development'].map((item, index) => (
                    <span onClick={()=>handleFilter(item)} className="p-2 cursor-pointer hover:p-2 hover:bg-white hover:rounded">{item}</span>
                    
                ))}
            </div>
            <div className="lg:grid lg:grid-cols-3 px-[5rem] lg:py-8 gap-4 sm:py-12 sm:grid">
                <Card courses={display}/>
            </div>
            <div className="flex justify-center text-sm font-satoshi">
                <span className="px-5 py-4 text-white rounded bg-gen-blue">Explore All Courses</span>
            </div>
        </div>
    )
}



export default Courses