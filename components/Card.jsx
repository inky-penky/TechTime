import Image from "next/image"
import Image_1 from '../public/vectors/images/unsplash_Oalh2MojUuk.png'
import Star from '../public/vectors/svg/grade.svg'
import Schedule from '../public/vectors/svg/schedule.svg'
import Book from '../public/vectors/svg/menu_book.svg'
import Avatar_1 from '../public/vectors/images/Frame_1655.png'



const Card = () => {
    return (
        <div className="p-2 bg-white rounded max-w-max">
            <div className="w-[22.78rem] ">
                <Image src={Image_1} />
            </div>
            <div className="flex justify-between text-[.7rem] pt-2 font-satoshi">
                <div className="">
                    <span className="px-3 py-0.5 bg-tag-blue rounded-xl text-tagTextBlue">Design</span>
                </div>
                <div className="flex items-center gap-2 text-gen-ash">
                    <div className="flex items-center justify-center">
                        <p>4.7k</p>
                        <div className="-mt-[.15rem]">
                            <Image src={Star} width={13} />
                        </div>
                    </div>
                    <div className="">
                        <p>(32.7k+)</p>
                    </div>
                </div>
            </div>
            <div className="text-[1.2rem] font-clash font-semibold pt-4">
                <h3 className="pr-10">Introduction To User Research In UX Design</h3>
            </div>
            <div className="flex justify-between font-satoshi text-gen-ash text-[.7rem] pt-2">
                <div className="flex items-center gap-1.5">
                    <Image src={Schedule} width={13} />
                    <p className="">23hrs 50mins</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <Image src={Book}  width={13} />
                    <p className="">15 Lessons</p>
                </div>
            </div>
            <div className="flex justify-between pt-2">
                <div className="flex font-satoshi gap-1 text-[0.7rem] items-center">
                    <Image src={Avatar_1} width={25} />
                    <p className="">Leonard Victor</p>
                </div>
                <div className="">
                    <p className="font-semibold font-clash text-gen-blue text-[1rem]">$15.00</p>
                </div>
            </div>
        </div>
    )
}



export default Card