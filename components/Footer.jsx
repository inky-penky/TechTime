import Image from "next/image"
import Logo from '../public/vectors/svg/techtime.svg'
import Facebook from '../public/vectors/svg/path14.svg'
import Twitter from '../public/vectors/svg/Twitter  svg.svg'
import Youtube from '../public/vectors/svg/YouTube svg.svg'
import Instagram from '../public/vectors/svg/Instagram svg.svg'
import Discord from '../public/vectors/svg/Discord svg.svg'
import Link from "next/link"





const Footer = () => {
    return (
        <div className="bg-[#000F24] h-full pt-28 pb-52 px-20 lg:flex justify-between sm:grid">
            <div className="flex flex-col gap-5">
                <div className="">
                    <Image src={Logo} width={100} />
                </div>
                <div className="text-xs text-white font-satoshi">
                    <p className="">Reach out to us on any of our social media networks</p>
                </div>
                <div className="flex gap-4 ">
                    <Link href="" legacyBehavior>
                        <a className="">
                            <Image src={Facebook} width={25} />
                        </a>
                    </Link>
                    <Link href="" legacyBehavior>
                        <a className="">
                            <Image src={Twitter} width={25} />
                        </a>
                    </Link>
                    <Link href="" legacyBehavior>
                        <a className="">
                            <Image src={Youtube} width={25} />
                        </a>
                    </Link>
                    <Link href="" legacyBehavior>
                        <a className="">
                            <Image src={Instagram} width={25} />
                        </a>
                    </Link>
                    <Link href="" legacyBehavior>
                        <a className="">
                            <Image src={Discord} width={25} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-white">
                <div className="font-semibold font-clash text-[1.5rem]">
                    <h3 className="">UsefulLinks</h3>
                </div>
                <div className="flex flex-col gap-1 text-sm font-satoshi">
                    <Link href="#" legacyBehavior>
                        <a className="">Home</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="">About Us</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="">Courses</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="">Testimonial</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="">Community</a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-white">
                <div className="font-semibold font-clash text-[1.5rem]">
                    <h3 className="">Community</h3>
                </div>
                <div className="flex flex-col gap-1 text-sm font-satoshi">
                    <Link href="#" legacyBehavior>
                        <a className="" target="_blank">Help Centers</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="" target="_blank">Partners</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="" target="_blank">Suggestions</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="" target="_blank">Blog</a>
                    </Link>
                    <Link href="#" legacyBehavior>
                        <a className="" target="_blank">News Letter</a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-white">
                <div className="font-semibold font-clash text-[1.5rem]">
                    <h3 className="">Subscribe Us</h3>
                </div>
                <div className="flex text-xs font-satoshi">
                    <input className="bg-[#2A2A2B] px-2 py-2 rounded-l-sm" placeholder="Nft123@gmail.com"></input>
                    <button className="px-2 rounded-r-sm bg-gen-blue placeholder-[#424141]">Send Message</button>
                </div>
            </div>
        </div>
    )
}



export default Footer