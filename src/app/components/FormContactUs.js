"use client"
import { space, zen_dots } from '@/lib/fonts'
import React from 'react'
import { toast } from 'react-toastify'

function FormContactUs() {
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <form onSubmit={onSubmitHandler} action="" className='w-full flex gap-3 flex-col h-full'>
            <h2 className={`${zen_dots.className} text-3xl text-white`}>Get In Touch</h2>
            <input type="text" placeholder='Name' name="user_name" required className=' text-white w-[90%] mt-2 text-lg outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' />
            <input type="email" placeholder='Email' name="user_email" required className='w-[90%]  text-white text-lg outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' />
            <input type="text" placeholder='Subject' required className='w-[90%]  text-white text-lg outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' />
            <textarea rows="6" placeholder="Your Message" name="message" className='w-[90%]  text-white text-lg outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' required></textarea>
            <button type="submit" className={`w-[90%] outline-none  px-4 py-3 bg-[#CCEE0C] font-bold text-xl rounded-lg `}>Send Message</button>
        </form>
    )
}

export default FormContactUs 
