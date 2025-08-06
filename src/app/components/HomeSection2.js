"use client"
import { space, zen_dots } from '@/lib/fonts'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Building, ClipboardCheck, Crown, Dumbbell, HandFist, Leaf } from 'lucide-react'
import React, { useLayoutEffect, useRef } from 'react'

function HomeSection2() {
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef(null)
    const heading = useRef(null)
    const box = useRef(null)
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.from(heading.current,{
                x:-200,
                opacity:0,
                duration:1,
                ease: "power2.out",
                scrollTrigger:{
                    trigger:container.current,
                    start:"top center"
                }
            })
             gsap.from(box.current,{
                x:-200,
                opacity:0,
                duration:1,
                delay:.5,
                ease: "power2.out",
                scrollTrigger:{
                    trigger:container.current,
                    start:"top center"
                }
            })
        },container)
        return ()=> ctx.revert()
    },[])
    return (
        <div ref={container} className='w-full px-3 flex flex-col justify-center gap-y-[5vw] items-center min-h-screen'>
            <div ref={heading}>
                <h1 className={`${zen_dots.className} text-center text-white lg:text-5xl sm:text-4xl text-3xl`}>
                    Inspired to <br /> <span className='text-[#CCEE0C]'>Inspire Your Best Self</span>
                </h1>
                <p className={`${space.className} text-white text-center text-sm mt-1.5`}>{`We'r Your Partner to Achieving A Healthier, Strong And More Confident Yoy`}</p>
            </div>
            <div ref={box} className='md:w-[70%] sm:w-[80%] px-10 w-[90%] m:min-h-[45vh] h-[70vh] rounded-3xl bg-[#171813] relative'>
                <div className=' lg:w-[75%] sm:w-[70%] w-full  grid lg:grid-cols-2   lg:grid-rows-3 gap-y-5 py-5 justify-items-start items-center sm:h-full h-[40%]'>
                   <div className='flex items-center gap-2 grid-cols-1'> <div className='p-1 rounded-full w-fit h-fit border-2 border-[#ccee0c]'><Leaf size={20} color="#ccee0c" /></div> <h2 className={`${space.className} lg:text-lg text-white font-bold`}>Nutrition Guidance</h2></div>
                   <div className='flex items-center gap-2 grid-cols-2'> <div className='p-1 rounded-full w-fit h-fit border-2 border-[#ccee0c]'><ClipboardCheck size={20} color="#ccee0c" /></div> <h2 className={`${space.className} lg:text-lg text-white font-bold`}>Program Tarking</h2></div>
                   <div className='flex items-center gap-2 grid-cols-3'> <div className='p-1 rounded-full w-fit h-fit border-2 border-[#ccee0c]'><Dumbbell size={20} color="#ccee0c" /></div> <h2 className={`${space.className}text-lg text-white font-bold`}>Expert Trainer</h2></div>
                   <div className='flex items-center gap-2'> <div className='p-1 rounded-full w-fit h-fit border-2 border-[#ccee0c]'><Crown size={20} color="#ccee0c" /></div> <h2 className={`${space.className}text-lg text-white font-bold`}>Premium Membership</h2></div>
                   <div className='flex items-center gap-2'> <div className='p-1 rounded-full w-fit h-fit border-2 border-[#ccee0c]'><HandFist size={20} color="#ccee0c" /></div> <h2 className={`${space.className}text-lg text-white font-bold`}>Community Support</h2></div>
                   <div className='flex items-center gap-2'> <div className='p-1 rounded-full w-fit h-fit border-2 border-[#ccee0c]'><Building size={20} color="#ccee0c" /></div> <h2 className={`${space.className}text-lg text-white font-bold`}>Next-Level Fitness Space</h2></div>
                </div>
                <img src="/Model1.png" className='-z-10 absolute filter grayscale sm:top-0 bottom-0 object-center object-cover brightness-50 right-0 h-full' alt="" />
            </div>
        </div>
    )
}

export default HomeSection2
