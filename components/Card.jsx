import Image from "next/image"
import Star from '../public/vectors/svg/grade.svg'
import Schedule from '../public/vectors/svg/schedule.svg'
import Book from '../public/vectors/svg/menu_book.svg'





const Card = ({courses}) => {
      

    
    return (
        <>
            {courses.map((course, index) => (
                <div className="p-2 bg-white rounded max-w-max" key={index}>
                <div className="">
                    <Image src={course.image} width={400} height={100} alt={course.title} />
                </div>
                <div className="flex justify-between text-[.7rem] pt-2 font-satoshi">
                    <div className="">
                        <span className="px-3 py-0.5 bg-tag-blue rounded-xl text-tagTextBlue">{course.tag}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gen-ash">
                        <div className="flex items-center justify-center">
                            <p>4.7k</p>
                            <div className="-mt-[.15rem]">
                                <Image src={Star} width={13} height={1} />
                            </div>
                        </div>
                        <div className="">
                            <p>{course.rating}</p>
                        </div>
                    </div>
                </div>
                <div className="text-[1.2rem] font-clash font-semibold pt-4">
                    <h3 className="pr-10">{course.title}</h3>
                </div>
                <div className="flex justify-between font-satoshi text-gen-ash text-[.7rem] pt-2">
                    <div className="flex items-center gap-1.5">
                        <Image src={Schedule} width={13} height={1} />
                        <p className="">{course.duration}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Image src={Book}  width={13} height={1} />
                        <p className="">{course.lessons}</p>
                    </div>
                </div>
                <div className="flex justify-between pt-2">
                    <div className="flex font-satoshi gap-1 text-[0.7rem] items-center">
                        <Image src={course.avatar} width={25} height={1} />
                        <p className="">{course.name}</p>
                    </div>
                    <div className="">
                        <p className="font-semibold font-clash text-gen-blue text-[1rem]">{course.price}</p>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}



export default Card