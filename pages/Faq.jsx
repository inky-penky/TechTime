import { faq } from '../components/faq'
import { useState } from 'react';
import Image from 'next/image';
import Plus from '../public/vectors/svg/add.svg'
import Minus from '../public/vectors/svg/remove.svg'




const Faq = () => {

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
      };
    



    
    return (
        <div className="flex flex-col items-center h-full py-16 text-center bg-gen-gray">
            <div className="flex flex-col items-center pb-14">
                <h1 className="font-semibold font-clash text-[2.5rem]">Frequently Asked Questions</h1>
                <p className="font-satoshi text-[.75rem] w-[32rem] text-gen-ash">High-Defination Video Is Video Of Higher Resolution 
                And Quality Than Standard Definition. While There’s No Standard Meaning 
                For High Definition, Generally Any Standard Video Image
                </p>
            </div>
            {faq.map((faq, index) => (
                <div className="flex flex-col  pt-5 border-b font-satoshi w-[45rem] cursor-pointer" key={index} onClick={() => toggleExpand(index)}>
                    <div className="flex justify-between">
                        <span className="font-semibold text-[1.2rem] ">{faq.question}</span>
                        <span className="">
                            {expanded[index]? <Image src={Minus} />: <Image src={Plus} />}
                        </span>
                    </div>
                    <div className="py-5 text-start">
                        {expanded[index] && <p className="text-sm text-gen-ash">{faq.answer}</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Faq