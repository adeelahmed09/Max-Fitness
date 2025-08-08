"use client"

import { zen_dots } from "@/lib/fonts"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function Footer() {
  return (
    <div className="w-full justify-around sm:pt-15 sm:py-0 py-18 sm:gap-x-[5vw] gap-y-[5vh] bg-[#0F1304] min-h-[35vh] grid sm:grid-cols-3 grid-cols-1  px-[2vw] justify-items-center">
      <div className=" flex flex-col items-center">
        <h1 className={`${zen_dots.className} sm:text-2xl text-xl text-[#CCEE0C]`}>Max Fitness Center</h1>
        <p className="text-white text-center text-sm mt-3.5">Your go-to For Personalized Workouts. Meal Plans And Expert Fitness Advice</p>
      </div>
      <div className=" flex flex-col items-center">
        <h1 className={`${zen_dots.className} text-2xl text-[#CCEE0C]`}>Follow Us On</h1>
        <div className="flex gap-10 mt-3">
            <Facebook size={28} color="white"/>
            <Linkedin size={28} color="white"/>
            <Instagram size={28} color="white"/>
            <Twitter size={28} color="white"/>

        </div>
      </div>
      <div className=" flex flex-col gap-1.5 text-white">
        <h1 className={`${zen_dots.className} text-2xl text-[#CCEE0C]`}>Contact Us</h1>
        <p>Monday to Sunday</p>
        <p>8:00AM - 12:00AM</p>
        <p>E-mail</p>
        <p>fitnesscenter@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
