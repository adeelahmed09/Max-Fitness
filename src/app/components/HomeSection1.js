"use client"
import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Zen_Dots, Space_Grotesk } from "next/font/google"
const zen_dots = Zen_Dots({
    subsets: ["latin"],
    weight: ["400"],
});
const space = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400"],
});
function HomeSection1() {
    gsap.registerPlugin(useGSAP);
    const mainHeading = useRef(null)
    const paragraph = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline({ defaults: {  opacity: 0, ease: "power2.out" } })
        tl.from(mainHeading.current, {
            y: 45,
            opacity: 0,
            duration: 1,
        })
        tl.from(paragraph.current, {
            y: 45,
            opacity: 0,
            duration: 1,
        })
    }, [])
    return (
        <div className='h-screen w-[100vw] flex justify-center flex-col items-center relative sm:gap-4 gap-2 overflow-hidden'>
            <img src="/GymMainHeroImage.webp" className="-z-20 brightness-35 w-full h-full absolute object-cover sm:object-center object-[-500px] w-full" alt="" />
            <h1 ref={mainHeading} className={`sm:text-4xl text-3xl md:text-6xl tracking-tighter text-center text-white uppercase ${zen_dots.className}`}>
                Unlock <span className='primaryColor'>Your</span> Power
            </h1>
            <p ref={paragraph} className={`${space.className}  text-center px-3 sm:px-0 sm:text-2xl text-white tracking-wide`}>
                Build the Strongest Version of Yourself
            </p>
            <button className={`px-3 py-2 font-extrabold sm:text-lg rounded-xl secondaryBackColor  ${zen_dots.className}`}>
                Join Now
            </button>
        </div>
    )
}

export default HomeSection1
