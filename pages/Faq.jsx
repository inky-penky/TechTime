import { faq } from '../components/faq'
import { useState } from 'react';
import Image from 'next/image';
import Plus from '../public/vectors/svg/add.svg'
import Minus from '../public/vectors/svg/remove.svg'
import Circle from '../public/vectors/svg/Vector (5).svg'




const Faq = () => {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1)
        }else {
            setExpandedIndex(index)
        }
      };
    



    
    return (
        <div className="flex flex-col items-center h-full py-16 text-center bg-gen-gray">
            <div className="relative flex flex-col items-center pb-14">
                <h1 className="font-semibold font-clash text-[2.5rem]">Frequently Asked Questions</h1>
                <Image src={Circle} width={15} className="absolute -right-[8rem] mt-5" alt="circle" />
                <p className="font-satoshi text-[.75rem] w-[32rem] text-gen-ash">High-Defination Video Is Video Of Higher Resolution 
                And Quality Than Standard Definition. While There’s No Standard Meaning 
                For High Definition, Generally Any Standard Video Image
                </p>
            </div>
            {faq.map((faq, index) => (
                <div className="flex flex-col  pt-5 border-b font-satoshi w-[45rem] cursor-pointer" key={index} onClick={() => toggleExpand(index)}>
                    <div className="flex justify-between">
                        <span className={`font-semibold text-[1.2rem] ${expandedIndex === index && 'text-gen-blue'} `}>{faq.question}</span>
                        <span className="">
                            {expandedIndex === index? <Image src={Minus} alt="minus" />: <Image src={Plus} alt="plus"/>}
                        </span>
                    </div>
                    <div className="py-5 text-start">
                        {expandedIndex === index && <p className="text-sm text-gen-ash">{faq.answer}</p>}
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Faq