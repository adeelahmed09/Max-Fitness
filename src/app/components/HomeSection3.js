"use client"
import { zen_dots } from '@/lib/fonts'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Carousel from './Carousel'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function HomeSection3() {
    gsap.registerPlugin(ScrollTrigger)
    const container = useRef(null);
    const box = useRef(null)
    const heading = useRef(null);
    const carousel = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(box.current, {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top center"
                }
            })
            gsap.from(carousel.current, {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: box.current,
                    start: "top center"
                }
            })
        },[container])
        return ()=> ctx.revert()
    }, [])
    return (
        <div ref={container} className='w-screen sm:px-5 px-2 sm:py-0 sm:flex-none flex flex-col justify-center sm:h-screen  h-[80vh]'>
            <div ref={box} className='text-white flex flex-col justify-center items-center'>
                <h1 className={`${zen_dots.className} text-center text-[#CCEE0C] lg:text-5xl sm:text-4xl text-3xl font-bold`}>
                    <span className='text-white'>Discover</span>
                    <br />
                    What Set Us Apart
                </h1>
                <p className='sm:w-[50%] w-[90%] mt-2.5 text-center'>
                    {` We Deliver A Fitness Experience That's Truly One-Of-A-Kind. Explore How We Help You Achive Your Goals Faster And Smarter
                `}
                </p>
            </div>
            <Carousel ref={carousel}/>
        </div>
    )
}

export default HomeSection3
