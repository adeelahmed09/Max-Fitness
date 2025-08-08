"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BicepsFlexed, Droplet, HeartPlus } from 'lucide-react'
import React from 'react'
import { Zen_Dots } from "next/font/google";
import Link from 'next/link';
const zenDots = Zen_Dots({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
function Carousel() {
    return (
        <div className="sm:w-full w-[80vw] max-w-5xl sm:mt-[5vw] mt-[10vw] mx-auto ">
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={3} 
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },     
                    640: { slidesPerView: 2 },   
                    1024: { slidesPerView: 3 },  
                }}
            >
                <SwiperSlide>
                    <div className='bg-[#424735] px-6 rounded-3xl py-4'>
                        <div className='flex gap-5 items-center'>
                            <div className='border-2 bg-black rounded-full p-1 border-black'>
                                <HeartPlus size={28} color="#CCEE0C" />
                            </div>
                            <h1 className={`${zenDots.className} text-white text-xl`}>Cardio Training</h1>
                        </div>
                        <p className='text-sm text-white mt-3 '>Bost endurance and heart health with hig enrgy cardion session design to keep you moving</p>
                        <div className='mt-3 w-full flex justify-end'>
                            <Link href={"#"} className='text-black font-semibold bg-[#CCEE0C] px-3 py-1.5 rounded-lg '>See Plan</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#424735] px-6 rounded-3xl py-4'>
                        <div className='flex gap-5 items-center'>
                            <div className='border-2 bg-black rounded-full p-1 border-black'>
                                <BicepsFlexed size={28} color="#CCEE0C" />
                            </div>
                            <h1 className={`${zenDots.className} text-white text-xl`}>Strenght Build</h1>
                        </div>
                        <p className='text-sm text-white mt-3 '>Bost endurance and heart health with hig enrgy cardion session design to keep you moving</p>
                        <div className='mt-3 w-full flex justify-end'>
                            <Link href={"#"} className='text-black font-semibold bg-[#CCEE0C] px-3 py-1.5 rounded-lg '>See Plan</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#424735] px-6 rounded-3xl py-4'>
                        <div className='flex gap-5 items-center'>
                            <div className='border-2 bg-black rounded-full p-1 border-black'>
                                <Droplet size={28} color="#CCEE0C" />
                            </div>
                            <h1 className={`${zenDots.className} text-white text-xl`}>Fat loss</h1>
                        </div>
                        <p className='text-sm text-white mt-3 '>Bost endurance and heart health with hig enrgy cardion session design to keep you moving</p>
                        <div className='mt-3 w-full flex justify-end'>
                            <Link href={"#"} className='text-black font-semibold bg-[#CCEE0C] px-3 py-1.5 rounded-lg '>See Plan</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#424735] px-6 rounded-3xl py-4'>
                        <div className='flex gap-5 items-center'>
                            <div className='border-2 bg-black rounded-full p-1 border-black'>
                                <BicepsFlexed size={28} color="#CCEE0C" />
                            </div>
                            <h1 className={`${zenDots.className} text-white text-xl`}>Cardio Training</h1>
                        </div>
                        <p className='text-sm text-white mt-3 '>Bost endurance and heart health with hig enrgy cardion session design to keep you moving</p>
                        <div className='mt-3 w-full flex justify-end'>
                            <Link href={"#"} className='text-black font-semibold bg-[#CCEE0C] px-3 py-1.5 rounded-lg '>See Plan</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel