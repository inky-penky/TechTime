import Image from "next/image"
import HeroImage from '../public/vectors/images/Hero_image.png'
import Zigzag from '../public/vectors/svg/Vector (2).svg'
import GreenCircle from '../public/vectors/svg/Vector (9).svg'
import YellowDot from '../public/vectors/svg/Vector (8).svg'
import Arrow from '../public/vectors/svg/Vector.svg'
import OutwardArrow from '../public/vectors/svg/arrow_outward.svg'
import ImageStack from "../components/ImageStack"



const Hero = () => {
    return (
        <div id="home" className="flex lg:justify-between gap-20 pr-[6rem] sm:flex-wrap lg:flex-nowrap sm:justify-center mt-32">
            <div className="w-1/2 pt-[5rem] flex flex-col ">
                <div className="px-[7rem] flex justify-between">
                    <Image src={GreenCircle} />
                    <Image src={YellowDot} />
                </div>
                <div className="flex items-end justify-end gap-10 pt-16 text-white">
                    <Image src={Zigzag} width={50} className="pb-3"/>
                    <h1 className="text-[2.8rem] font-semibold font-clash">Grow your skills to advance your career path </h1>
                </div>

                <div className="pl-[5.8rem] grid pt-2">
                    <div className="">
                        <p className="text-[#E7E7E7] text-[.92rem] font-satoshi">Build Your Future With Our Quality Education. 
                        The Best And Largest All-In-One Online Tutoring Platform In The World</p>
                    </div>
                    <div className="flex items-start justify-between pt-6">
                        <div className="flex gap-5 font-satoshi">
                            <div className="flex items-center justify-center gap-2 px-6 py-3 text-sm text-white bg-transparent border border-white rounded">
                                <span className="">Get Started Now</span>
                                <Image src={OutwardArrow} />
                            </div>
                            <div className="text-sm">
                                <button className="px-5 py-3 bg-white rounded text-gen-blue">Enroll Now</button>
                            </div>
                        </div>
                        <div className="-mt-10 -mr-28 ">
                            <Image src={Arrow} width={90} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <div className="">
                            <ImageStack />
                        </div>
                        <div className="flex flex-col text-white font-clash">
                            <p className="font-semibold text-[1.2rem]">255K+</p>
                            <p className="pl-1.5 -mt-1.5 text-xs">Previews</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="">
                <Image src={HeroImage} width={650}  />
            </div>
        </div>
        
    )
}


export default Hero