"use client"
import { zen_dots } from '@/lib/fonts'
import React from 'react'
import Carousel from './Carousel'

function HomeSection3() {
    return (
        <div className='w-screen sm:px-5 px-2 pt-[12vh] h-screen'>
            <div className='text-white flex flex-col justify-center items-center'>
                <h1 className={`${zen_dots.className} text-center text-[#CCEE0C] lg:text-5xl sm:text-4xl text-3xl font-bold`}>
                    <span className='text-white'>Discover</span>
                    <br />
                    What Set Us Apart
                </h1>
                <p className='sm:w-[50%] w-[90%] mt-2.5 text-center'>
                    We Deliver A Fitness Experience That's Truly One-Of-A-Kind. Explore How We Help You Achive Your Goals Faster And Smarter
                </p>
            </div>
            <Carousel/>
        </div>
    )
}

export default HomeSection3
