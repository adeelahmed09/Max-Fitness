"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Zen_Dots } from "next/font/google"
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
                <li className={`${pathName==="/"?"border-t-2 border-[#CCEE0C] text-[#CCEE0C]":"border-none text-white hover:text-[#CCEE0C]"} py-7`}><Link href={"/"}>Home</Link></li>
                <li className={`${pathName==="/about-us"?"border-t-2 border-[#CCEE0C] text-[#CCEE0C]":"border-none hover:text-[#CCEE0C] text-white"} py-7`}><Link href={"#"}>About Us</Link></li>
                <li className={`${pathName==="/contact-us"?"border-t-2 border-[#CCEE0C] text-[#CCEE0C]":"border-none hover:text-[#CCEE0C] text-white"} py-7`}><Link href={"#"}>Contact Us</Link></li>
            </ul>
        </section>
    </nav>
    <div className='absolute top-0 w-full text-center pt-4 sm:hidden'>
        <h1 className={`${zen_dots.className} text-2xl text-white`}>Max <span className='text-[#CCEE0C]'>Fitness</span> Center</h1>
    </div>
    <nav className='sm:hidden' id='mobileNav'>

    </nav>
    </>
  )
}

export default Nav
