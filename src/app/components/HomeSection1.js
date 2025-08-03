"use client"
import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Zen_Dots, Space_Grotesk } from "next/font/google"
const zen_dots = Zen_Dots({
    subsets: ["latin"],
    weight: ["400"],
});
const space = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: 'swap',
});
function HomeSection1() {
    const mainHeading = useRef(null)
    const paragraph = useRef(null)
    const button = useRef(null)
    useEffect(() => {
        gsap.from(mainHeading.current, {
            y: 45,
            opacity: 0,
            duration: .6,
            ease: "power2.out"
        })
        gsap.from(paragraph.current, {
            y: 45,
            opacity: 0,
            duration: .6,
            delay: .5,
            ease: "power2.out"
        })
        gsap.from(button.current, {
            y: 45,
            opacity: 0,
            duration: .6,
            delay: 1,
            ease: "power2.out"
        })
    }, [])
    return (
        <div className='h-screen w-[100vw] flex justify-center flex-col items-center relative lg:gap-4 sm:gap-3 gap-2 overflow-hidden'>
            <Image
                src="/GymMainHeroImage.webp"
                alt="Max Fitness Center Hero Image"
                fill
                className="-z-20 brightness-35 object-cover sm:object-center object-[60%_center]"
                priority
            />
            <h1 ref={mainHeading} className={`sm:text-4xl text-3xl lg:text-7xl tracking-tighter text-center text-white uppercase ${zen_dots.className}`}>
                Unlock <span className='primaryColor'>Your</span> Power
            </h1>
            <p ref={paragraph} className={`${space.className}  text-center px-3 sm:px-0 sm:text-lg text-white tracking-wide`}>
                Build the Strongest Version of Yourself
            </p>
            <button ref={button} className={`px-3 py-2 font-extrabold sm:text-lg rounded-xl bg-[#CCEE0C] hover:bg-white border-2 border-[#CCEE0C] hover:border-black  ${zen_dots.className}`}>
                Join Now
            </button>
        </div>
    )
}

export default HomeSection1
