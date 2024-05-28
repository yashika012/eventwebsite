import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

const Hero = () => {
  return (
    <section className='w-full min-h-[70vh] flex flex-col items-center justify-center font-montserrat hero gap-14'>
      <p className='font-bold md:text-5xl sm:text-3xl text-2xl text-white pl-7'>Don't miss out!
        <br />
      Explore the <span className='text-heading'>vibrant events</span> happening locally and globally.</p>
      <div className='flex justify-between items-center px-3 rounded-xl md:w-[750px] sm:w-[550px] w-[400px] h-12 bg-white'>
        <div className='flex sm:text-xl text-lg font-normal sm:w-72 w-60 justify-between items-center'>
          <CiSearch className='text-search sm:text-3xl text-xl'/>
          <input type="text" placeholder='Search for events...' />
        </div>
        <div className='flex sm:w-44 w-36 justify-between items-center sm:text-xl text-lg font-medium'>
          <GrLocation className='text-search sm:text-3xl text-xl'/>
          <p>Mumbai</p>
          <IoIosArrowDown className='text-search sm:text-3xl text-xl'/>
        </div>
      </div>
    
    </section>
  )
}

export default Hero