"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Zen_Dots } from "next/font/google"
import { House, Phone, Users } from 'lucide-react';
const zen_dots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
});
function Nav() {
  const pathName = usePathname()
  return (
    <>
      <nav className='sm:flex hidden px-16 absolute w-full z-10 justify-between items-center' id='pcNav'>
        <section className='left-nav'>
          <h1 className={`${zen_dots.className} lg:text-3xl sm:text-xl text-white`}>Max <span className='text-[#CCEE0C]'>Fitness</span> Center</h1>
        </section>
        <section className='right-nav'>
          <ul className={`lg:text-lg sm:text ${zen_dots.className} flex items-center gap-5 text-white`}>
            <li className={`${pathName === "/" ? "border-t-2 border-[#CCEE0C] text-[#CCEE0C]" : "border-none text-white hover:text-[#CCEE0C]"} py-7`}><Link href={"/"}>Home</Link></li>
            <li className={`${pathName === "/about-us" ? "border-t-2 border-[#CCEE0C] text-[#CCEE0C]" : "border-none hover:text-[#CCEE0C] text-white"} py-7`}><Link href={"#"}>About Us</Link></li>
            <li className={`${pathName === "/contact-us" ? "border-t-2 border-[#CCEE0C] text-[#CCEE0C]" : "border-none hover:text-[#CCEE0C] text-white"} py-7`}><Link href={"/contact-us"}>Contact Us</Link></li>
          </ul>
        </section>
      </nav>
      <div className='absolute z-50 top-0 w-full  text-center pt-4 sm:hidden'>
        <h1 className={`${zen_dots.className} text-3xl -tracking-tighter text-white`}>Max <span className='text-[#CCEE0C]'>Fitness</span> Center</h1>
      </div>
      <nav className='sm:hidden w-full px-5 py-5 border-t-2 border-[#CCEE0C] bg-black flex items-center justify-around fixed text-white bottom-0 z-50' id='mobileNav'>
        <Link href={"/"} className={`flex flex-col items-center hover:text-[#CCEE0C] justify-center`}><House size={24} color={pathName === "/" ? "#CCEE0C" : "  #fff"} strokeWidth={2.5} /> </Link>
        <Link href={"/"} className={`flex flex-col items-center justify-center`}><Users strokeWidth={2.5} color={pathName === "/about-us" ? "#CCEE0C" : "  #fff"}/> </Link>
        <Link href={"/contact-us"} className={`flex flex-col items-center justify-center`}><Phone strokeWidth={2.5} color={pathName === "/contact-us" ? "#CCEE0C" : "  #fff"} /> </Link>
      </nav>
    </>
  )
}

export default Nav
