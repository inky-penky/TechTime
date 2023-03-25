import Image from "next/image"
import Link from "next/link"
import Logo from '../public/vectors/svg/techtime.svg'


const Navbar = () => {
    return (
        <div className="w-full bg-transparent h-auto flex justify-between items-center py-10 px-20">
            <div className="">
                <Image src={Logo} width={100}  />
            </div>

            <div className="flex gap-8 justify-center items-center text-[1rem]">
                <div className="text-nav-blue flex gap-5 ">
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
                <div className="">
                    <button className="bg-white text-gen-blue py-3 px-5 rounded">Enroll Now</button>
                </div>
            </div>
        </div>
    )
}


export default Navbar