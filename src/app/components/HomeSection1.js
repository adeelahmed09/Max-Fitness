"use client"
import React from 'react'
import { Zen_Dots,Space_Grotesk } from "next/font/google"
const zen_dots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],     
});
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],     
});
function HomeSection1() {
    return (
        <div className='h-screen w-screen flex justify-center flex-col items-center relative gap-4 overflow-hidden'>
            <img src="/GymMainHeroImage.webp" className="-z-20 brightness-35 absolute object-center w-full" alt="" />
            <h1 className={`text-4xl md:text-6xl tracking-tighter text-white uppercase ${zen_dots.className}`}>
                Unlock <span className='primaryColor'>Your</span> Power
            </h1>
            <p className={`${space.className} text-lg md:text-2xl text-white tracking-wide`}>
                Build the Strongest Version of Yourself
            </p>
            <button className={`px-3 py-2 font-extrabold text-lg rounded-xl secondaryBackColor  ${zen_dots.className}`}>
                Join Now
            </button>
        </div>
    )
}

export default HomeSection1
