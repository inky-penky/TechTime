import Image from "next/image"
import Map from '../public/vectors/images/Frame 209.png'




const Community = () => {
    return (
        <div id="community" className="grid justify-center gap-5 p-14">
            <div className="grid justify-center gap-1 text-center text-white ">
                <h4 className="text-sm font-satoshi">JOIN OUR COMMUNITY</h4>
                <h1 className="font-semibold font-clash text-[2rem] w-[45rem]">Are you  ready to connect 
                with the future talent of the tech world
                </h1>
                <p className="text-sm font-satoshi">Meet Up With Other Techstars And Grow Together</p>
            </div>
            <div className="">
                <Image src={Map} alt="map" />
            </div>
            <div className="flex justify-center">
                <span className="px-8 py-3 text-sm bg-white rounded text-gen-blue font-satoshi">Join Our Community</span>
            </div>
        </div>
    )
}



export default Community