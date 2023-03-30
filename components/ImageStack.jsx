import Image from "next/image"
import Image_1 from '../public/vectors/images/Frame 95.png'
import Image_2 from '../public/vectors/images/Frame 96.png'
import Image_3 from '../public/vectors/images/Frame 97.png'
import Image_4 from '../public/vectors/images/Frame 98.png'
import Image_5 from '../public/vectors/images/Frame 99.png'



export default function ImageStack () {
    return (
        <div className="flex pl-[1rem]">
            <div className="w-12 -ml-4">
                <Image src={Image_1} />
            </div>
            <div className="w-12 -ml-4">
                <Image src={Image_2} />
            </div>
            <div className="w-12 -ml-4">
                <Image src={Image_3} />
            </div>
            <div className="w-12 -ml-4">
                <Image src={Image_4} />
            </div>
            <div className="w-12 -ml-4">
                <Image src={Image_5} />
            </div>
        </div>
    )
}
