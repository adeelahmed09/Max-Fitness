import { space, zen_dots } from '@/lib/fonts'
import { Check, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function HomeSection4() {
    return (
        <div className='w-screen flex justify-center items-center flex-col py-[5vh] lg:px-[10vw] sm:px-[2vw] px-[10vw]  min-h-screen plan' id='plan'>
            <h1 className={`text-4xl text-center mb-[5vw] text-white ${zen_dots.className}`}>
                Choose Your <span className='text-[#ccee0c]'>Plan</span>
            </h1>
            <div className='w-full h-[70%]  gap-x-[5vw] gap-y-[6vh] grid sm:grid-cols-3 grid-cols-1 '>
                <div className='flex flex-col border-2 gap-8 rounded-2xl hover:translate-y-[-15px] hover:shadow-lg shadow-[#ccee0c] transition border-[#ccee0c] h-full items-center px-2 py-8'>
                    <div className='text-center '>
                        <h1 className={`text-2xl ${zen_dots.className} text-[#ccee0c]`}>Basic Fit</h1>
                        <h1 style={{fontWeight:"600"}} className={`text-2xl mt-2 ${zen_dots.className} text-[#ccee0c]`}>2,500 PKR / mo</h1>
                    </div>
                    <ul className={`text-[#ccee0e] font-bold mt-6 flex flex-col gap-2 w-full  -tracking-tighter px-5 ${space.className}`}>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25} color='#ccee0c' /> <p>Gym Equipment Access</p></li>
                        <li className='flex items-center gap-2'><X size={20} strokeWidth={2.25} color='#ccee0c' /> <p>Locker Facility</p></li>
                        <li className='flex items-center gap-2'><X size={20} strokeWidth={2.25} color='#ccee0c' /> <p>Group Classes</p></li>
                        <li className='flex items-center gap-2'><X size={20} strokeWidth={2.25} color='#ccee0c' /> <p>Trainer Suport</p></li>
                    </ul>
                    <div className='flex w-full justify-end px-5'>
                        <Link className='px-5 py-2 font-bold bg-[#ccee0e] hover:bg-white hover:text-black transition rounded-2xl' href={"/contact-us"}>Buy Now</Link>
                    </div>
                </div>
                <div className='flex flex-col border-2 relative bg-[#CCEE0C] gap-8 rounded-2xl hover:translate-y-[-25px] shadow-lg shadow-[#ccee0c] transition border-[#ccee0c] h-full  items-center px-2 py-8'>
                    <div className='text-center '>
                        <h1 className={`text-2xl ${zen_dots.className} `}>Standard Pro</h1>
                        <h1 style={{fontWeight:"600"}} className={`text-2xl  mt-2 ${zen_dots.className} `}>6,500 PKR / mo</h1>
                    </div>
                    <ul className={` mt-6 flex font-bold flex-col gap-2 w-full  -tracking-tighter px-5 ${space.className}`}>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>Gym Equipment Access</p></li>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>Locker Facility</p></li>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>3 / mon Group Classes</p></li>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>Monthly Assessment</p></li>
                    </ul>
                    <div className='flex w-full justify-end px-5'>
                        <Link className='px-5 py-2 font-bold bg-black text-[#ccee0e] hover:bg-white hover:text-black transition rounded-2xl' href={"/contact-us"}>Buy Now</Link>
                    </div>
                    <h1 className={`${zen_dots.className} text-sm absolute top-[-16] border-2 border-[#ccee0e] text-[#ccee0e] bg-black px-3 py-1 rounded-2xl`}>
                        Best Seller
                    </h1>
                </div>
                <div className='flex flex-col border-2 gap-8 rounded-2xl hover:translate-y-[-15px] shadow-lg shadow-[#F6CD02] transition border-[#F6CD02] bg-[#F6CD02] h-full  items-center px-2 py-8'>
                    <div className='text-center '>
                        <h1 className={`text-2xl ${zen_dots.className} `}>Basic Fit</h1>
                        <h1 style={{fontWeight:"600"}} className={`text-2xl mt-2 ${zen_dots.className} `}>2,500 PKR / mo</h1>
                    </div>
                    <ul className={` mt-6 flex font-extrabold flex-col gap-2 w-full  -tracking-tighter px-5 ${space.className}`}>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>Gym Equipment Access</p></li>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>Personal Trainer</p></li>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>Diet Plans</p></li>
                        <li className='flex items-center gap-2'><Check size={20} strokeWidth={2.25}  /> <p>All Standard Features</p></li>
                    </ul>
                    <div className='flex w-full justify-end px-5'>
                        <Link className='px-5 py-2 font-bold bg-[black]  text-[#F6CD02] hover:bg-white hover:text-black transition rounded-2xl' href={"/contact-us"}>Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection4
