import Image from "next/image"
import Link from "next/link"
import Logo from '../public/vectors/svg/techtime.svg'


const Navbar = () => {
    return (
        <div className="w-full z-50 h-auto flex justify-between items-center pt-10 pb-5 px-[6rem] fixed bg-gen-blue">
            <div className="">
                <Image src={Logo} width={100}  />
            </div>

            <div className="flex items-center justify-center gap-8 text-sm font-satoshi">
                <div className="flex gap-5 text-nav-blue">
                    
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#about" className="hover:text-white">About Us</a>
                    <a href="#courses" className="hover:text-white">Courses</a>
                    <a href="#testimonial" className="hover:text-white">Testimonial</a>
                    <a href="#community" className="hover:text-white">Community</a>

                </div>
                <div className="">
                    <button className="px-5 py-3 bg-white rounded text-gen-blue">Enroll Now</button>
                </div>
            </div>
        </div>
    )
}


export default Navbar