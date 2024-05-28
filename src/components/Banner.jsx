import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import banner from '../assets/images/frontend.jpeg'
import { LuCalendarDays,LuClock } from "react-icons/lu";
import { IoTicketSharp } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";


const Banner = () => {
  return (
    <section className='min-h-screen w-full font-sans flex justify-center flex-col pt-16 flex-wrap'>
        <div className='flex items-center justify-center'>
        <GoArrowLeft className='text-3xl self-start mt-16 mr-4'/>
        <img src={banner} alt="" className='w-[1400px] h-[570px]'/>
        </div>
            <h1 className='text-black text-6xl font-bold px-20 pt-5 flex justify-between'>Frontend Showdown <span className='text-4xl'><GoShareAndroid/></span></h1>
        <div className='flex justify-between px-20 pt-10'>
            <div className='font-semibold'>
                <p className='text-3xl'>Date and Time</p>
                <p className='flex gap-3 items-center text-lg'><LuCalendarDays/><span>Saturday, 2 December 2023</span></p>
                <p className='flex gap-3 items-center text-lg'><LuClock/><span>6:30 PM - 9:30 PM</span></p>
            </div>
            <div className='w-[220px] h-[60px] bg-heading rounded-2xl flex items-center gap-3 justify-center text-2xl'><IoTicketSharp/><span>Register Now</span></div>
        </div>
    </section>
  )
}

export default Banner