"use client"
import React, { useLayoutEffect, useRef, useState } from 'react'
import Loader from './Loader'
import { zen_dots } from '@/lib/fonts'
import { toast } from 'react-toastify'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

import emailjs from 'emailjs-com';
import { publicAPI, service, template } from '@/lib/Info'
function ContactUsFormAndLocation() {
    gsap.registerPlugin(ScrollTrigger)
    const [Loading, setLoading] = useState(false)
    const box = useRef(null)
    const container = useRef(null)
    const form = useRef(null)
    const renderLoader = () => {
        if (!Loading) {
            return <></>
        }
        else {
            return (
                <Loader />
            )
        }
    }
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from(box.current, {
                y: 200,
                opacity: 0,
                duration: 1,
                delay: .5,
                ease: "power2.out",
            })
        }, container)
        return () => ctx.revert()
    }, [])
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        toast.loading('Sending...');
        console.log(
            service,template,publicAPI
        );

        emailjs.sendForm(service,template , e.target,publicAPI)
            .then((result) => {
                toast.dismiss();
                toast.success('Message sent!');
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
                toast.dismiss();
                toast.error('Failed to send. Try again!');
            });
    }
    return (
        <div ref={container} className='w-full flex justify-center items-center  px-1  lg:py-[5vw] sm:py-[3.5vw] py-[10vh]'>
            <div ref={box} className='sm:w-[70%] w-[90%] flex sm:flex-row flex-col rounded-2xl relative overflow-hidden sm:h-[75vh] bg-[#1A1A1A]'>
                {renderLoader()}
                <div className='sm:w-1/2 w-full sm:px-15 px-4 py-10  h-full'>
                    <form ref={form} onSubmit={onSubmitHandler} action="" className='w-full flex gap-3 flex-col h-full'>
                        <h2 className={`${zen_dots.className} text-3xl text-white`}>Get In Touch</h2>
                        <input type="text" placeholder='Name' name="user_name" required className=' text-white sm:w-[90%] w-full mt-2 text-sm outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' />
                        <input type="email" placeholder='Email' name="user_email" required className=' sm:w-[90%] w-full  text-white text-sm outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' />
                        <input type="text" placeholder='Subject' required className=' sm:w-[90%] w-full  text-white text-sm outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' />
                        <textarea rows="6" placeholder="Your Message" name="message" className=' sm:w-[90%] w-full  text-white text-sm outline-none placeholder-[#757575] px-4 py-3 bg-[#2C2C2C] rounded-lg' required></textarea>
                        <button type="submit" className={` sm:w-[90%] w-full outline-none  px-4 py-3 bg-[#CCEE0C] font-bold text-lg rounded-lg `}>Send Message</button>
                    </form>
                </div>
                <div className='sm:w-1/2 w-full flex gap-3 mt-2 justify-start  sm:px-15 px-4 py-10 flex-col  h-full'>
                    <h2 className={`${zen_dots.className} text-3xl text-white`}>Our Loaction</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.466010421446!2d74.28927967496737!3d31.56626634487425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191cb69275dd33%3A0x3a454f4c5811a8af!2sMax%20Fitness%20Center%20and%20Gym!5e0!3m2!1sen!2s!4v1754280786496!5m2!1sen!2s" width={"100%"} height="300" className='border-none bg-white w-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUsFormAndLocation
