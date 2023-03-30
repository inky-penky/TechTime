import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from '../components/testimonial'
import React, { Component } from "react";





const Testimonials =() => {
   
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1500,
        cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div id="testimonial" className="flex flex-col w-full h-full gap-10 py-14 bg-gen-gray">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-semibold font-clash text-[3rem]">What Our Clients Are Saying</h1>
                <p className="w-[40rem] text-sm font-satoshi text-gen-ash">High-Defination Video Is Video Of 
                Higher Resolution And Quality Than Standard Definition. 
                While There’s No Standard Meaning For High Definition, 
                Generally Any Standard Video Image
                </p>
            </div>
            <div className=" font-satoshi">
                <Slider {...settings}>
                    {testimonials.map((item, index) =>(
                        <div className="flex p-5 overflow-hidden bg-white rounded-2xl max-w-max" key={index}>
                            <div className="text-[.8rem] text-gen-ash" >
                                <p className=" max-w-max">{item.description}</p>
                            </div>
                            <div className="flex items-center gap-1.5 pt-5">
                                <div className="">
                                    <Image src={item.avatar} width={50} height={10} alt={item.title}/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm font-semibold">{item.name}</p>
                                    <p className="text-xs text-gen-ash">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}




export default Testimonials