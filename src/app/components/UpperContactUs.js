"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { zen_dots } from '@/lib/fonts';


function UperContactUs() {
  const container = useRef(null)
  const mainHeading = useRef(null)
  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(mainHeading.current, {
                y: 45,
                opacity: 0,
                duration: 0.6,
                delay:.2,
                ease: "power2.out",
            });
    },container)
    return ()=> ctx.revert()
  },[])
  return (
    <div ref={container} className='w-full flex justify-center items-center relative h-[50vh] '>
      <Image
        src="/ContactUsImage.webp"
        fill
        alt="Max Fitness Center Hero Image"
        className=" brightness-25  absolute object-cover sm:object-center object-[60%_center]"
        priority
      />
      <h1 ref={mainHeading} className={`${zen_dots.className} text-white z-10 lg:text-6xl sm:text-4xl text-3xl`}>
        <span className='text-[#CCEE0C]'>Contact</span> Us
      </h1>
    </div>
  )
}

export default UperContactUs
