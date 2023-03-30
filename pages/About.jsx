import Image from "next/image"
import Vector from '../public/vectors/svg/Vector (1).svg'
import Speaker from '../public/vectors/svg/speaker.svg'
import Network from '../public/vectors/svg/Frame 110 (1).svg'
import Play from '../public/vectors/svg/play.svg'
import Note from '../public/vectors/svg/document.svg'
import Zigzag from '../public/vectors/svg/Vector (10) copy.svg'
import Image_1 from '../public/vectors/images/unsplash_4-EeTnaC1S4.png'
import Image_2 from '../public/vectors/images/unsplash_VtKoSy_XzNU.png'
import Bubbles from '../public/vectors/svg/Vector (6).svg'
import Circle_1 from '../public/vectors/svg/Vector (7).svg'
import Triangle from '../public/vectors/svg/Vector (3).svg'
import Image_3 from '../public/vectors/images/unsplash_6MePtA9EVDA.png'
import Frame from '../public/vectors/svg/Frame 131.svg'
import Clock from '../public/vectors/svg/clock.svg'
import Community from '../public/vectors/svg/community.svg'
import Dollar from '../public/vectors/svg/dollar.svg'
import Circle_2 from '../public/vectors/svg/Vector purple.svg'
import ImageStack from "../components/ImageStack"






const About = () => {
    return (
        <div id="about" className="flex flex-col justify-center h-full pb-20 bg-gen-gray sm:flex-wrap">
            <div className="px-[5rem] flex gap-20 sm:flex-wrap lg:flex-nowrap sm:justify-center pb-5 ">
                <div className="grid w-1/2 gap-5 sm:justify-center sm:items-center">
                    <div className="relative flex flex-col items-start justify-start ">
                        <div className="absolute -ml-[3rem] mt-[3.15rem]">
                            <Image src={Vector} />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2 mt-20">
                            <h1 className="font-bold text-[2.7rem] font-clash">High quality video, audio & live classes</h1>
                            <div className="flex flex-col items-start gap-5">
                                <p className="text-sm text-gen-ash font-satoshi">High-Defination Video Is Video Of Higher Resolution And Quality 
                                Than Standard Definition. While There’s No Standard Meaning For High Definition, 
                                Generally Any Standard Video Image</p>
                                <button className="px-6 py-3 text-sm text-white rounded font-satoshi bg-gen-blue">View Courses</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 font-satoshi text-[#000F24] text-sm">
                        <div className="flex items-center justify-start gap-4 py-3 pl-4 pr-10 bg-white rounded max-w-max">
                            <Image src={Speaker} />
                            <p className="">Audio Classes</p>
                        </div>
                        <div className="flex items-center gap-4 py-3 pl-4 pr-10 bg-white rounded max-w-max ">
                            <Image src={Network} />
                            <p className="">Live Classes</p>
                        </div>
                        <div className="flex items-center gap-4 py-3 pl-4 pr-10 bg-white rounded max-w-max">
                            <Image src={Play} />
                            <p className="">Recorded Classes</p>
                        </div>
                        <div className="flex items-center gap-4 py-3 pl-4 pr-10 bg-white rounded max-w-max">
                            <Image src={Note} />
                            <p className="">50+ Notes</p>
                        </div>
                    </div>
                </div>
                <div className="relative grid justify-center w-1/2">
                    <div className="absolute z-20 grid items-center justify-center px-4 py-1 bg-white rounded top-[10rem] -left-12">
                        <div className="pl-3 text-[.65rem] font-satoshi">
                            <p>255k+ Enrolled Students</p>
                        </div>
                        <div className="w-[8.5rem]">
                            <ImageStack />
                        </div>
                    </div>
                    <div className="absolute w-12 -right-20 top-10">
                        <Image src={Zigzag} />
                    </div>
                    <div className="relative grid pt-14">
                        <div className="w-[25rem] z-10">
                            <Image src={Image_1} />
                        </div>
                        <div className="w-[6.5rem] absolute bottom-[5.5rem] -right-[1.15rem]">
                            <Image src={Bubbles} />
                        </div>
                        <div className="w-[15rem] -mt-[7.5rem] z-20 -ml-[7rem]">
                            <Image src={Image_2} />
                        </div>
                        <div className="ml-[16rem] w-3">
                            <Image src={Circle_1} />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="pt-[8rem] gap-[4rem] flex justify-between sm:flex-wrap sm:justify-center lg:flex-nowrap">
                <div className="w-1/2 -mt-[3rem] flex flex-col gap-5">
                    <div className="px-[5rem] grid gap-2">
                        <h1 className="font-bold text-[2.5rem] font-clash">This Is Why We Are Best From Others</h1>
                        <p className="text-sm text-gen-ash font-satoshi">
                            High-Defination Video Is Video Of Higher Resolution And Quality 
                            Than Standard Definition. While There’s No Standard Meaning For High Definition, 
                            Generally Any Standard Video Image
                        </p> 
                    </div>
                    <div className="flex gap-12 px-[1rem] items-center">
                        <div className="mt-[10rem] w-[1.2rem]">
                            <Image src={Triangle} />
                        </div>
                        <div className="w-[40rem]">
                            <Image src={Image_3} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 lg:flex sm:flex-wrap">
                    <div className="relative grid grid-cols-2 gap-4 rounded h-fit">
                        <div className="w-[16rem] bg-white p-5 grid rounded gap-5">
                            <div className="flex justify-start w-10 ">
                                <Image src={Frame} />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h4 className="text-sm font-semibold">Experienced Mentors</h4>
                                <p className="text-[.68rem] text-[#A1A1A1] font-satoshi">
                                High-Defination Video Is Video Of Higher Resolution And Quality 
                                Than Standard Definition. High-Defination Video Is Video Of Higher 
                                Resolution And Quality Than Standard Definition. 
                                </p>
                            </div> 
                        </div>
                        <div className="w-[16rem] bg-white p-5 grid rounded gap-5">
                            <div className="flex justify-start w-10">
                                <Image src={Clock} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-semibold">One-On-One Meetings</h4>
                                <p className="text-[.68rem] text-[#A1A1A1] font-satoshi">
                                High-Defination Video Is Video Of Higher Resolution And Quality 
                                Than Standard Definition. High-Defination Video Is Video Of Higher 
                                Resolution And Quality Than Standard Definition. 
                                </p>
                            </div> 
                        </div>
                        <div className="w-[16rem] bg-white p-5 grid rounded gap-5">
                            <div className="flex justify-start w-10">
                                <Image src={Community} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-semibold">One-On-One Meetings</h4>
                                <p className="text-[.68rem] text-[#A1A1A1] font-satoshi">
                                High-Defination Video Is Video Of Higher Resolution And Quality 
                                Than Standard Definition. High-Defination Video Is Video Of Higher 
                                Resolution And Quality Than Standard Definition. 
                                </p>
                            </div> 
                        </div>
                        <div className="w-[16rem] bg-white p-5 grid rounded gap-5">
                            <div className="flex justify-start w-10">
                                <Image src={Dollar} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-semibold">Affordable Prices</h4>
                                <p className="text-[.68rem] text-[#A1A1A1] font-satoshi">
                                High-Defination Video Is Video Of Higher Resolution And Quality 
                                Than Standard Definition. High-Defination Video Is Video Of Higher 
                                Resolution And Quality Than Standard Definition. 
                                </p>
                            </div> 
                        </div>
                        <div className="absolute -bottom-[3rem] -right-[2.5rem] w-[1rem]">
                            <Image src={Circle_2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About