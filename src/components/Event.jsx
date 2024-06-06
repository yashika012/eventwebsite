import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdownCircle } from "react-icons/io"
import image from '../assets/images/image.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Event = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/event.json')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  return (
    <section className='w-full min-h-screen bg-sign flex flex-col font-sans pt-20'>
            <div className='flex flex-col justify-between px-10 py-7 gap-5 flex-wrap items-center'>
            <h1 className='font-lalezar md:text-4xl sm:text-3xl text-2xl font-bold text-heading'>Upcoming Events</h1>
        {/* <div className='flex items-center justify-between font-medium md:text-base text-sm gap-7'>
            <button className='md:px-5 sm:px-3 px-1 sm:py-3 py-2 bg-white flex justify-around items-center gap-2 rounded-full'>Event Type
                <IoMdArrowDropdownCircle className='text-eyes'/>
            </button>
            <button className='md:px-5 sm:px-3 px-1 sm:py-3 py-2 bg-white flex justify-around items-center gap-2 rounded-full'>Any Category
                <IoMdArrowDropdownCircle className='text-eyes'/>
            </button>
        </div> */}
            </div>
            <div className='flex flex-wrap px-10 py-20 gap-10 justify-center items-center'>
                {data.map((event,index)=>(
                    <div className='flex flex-col w-80 h-[450px] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 shadow-gray-500 shadow-xl'>
                    <img src={event.img} alt="abc" width={500}/>
                    <div className='flex py-5 px-2 gap-5'>
                       <div className='text-3xl font-bold text-text'>
                       <h1 className=' font-proxima'>{event.month}</h1>
                        <p className=' text-center'>{event.date}</p>
                       </div>
                       <div className='flex flex-col gap-5'>
                        <Link to={`event/${event.id}`} className='font-proxima text-heading font-bold text-2xl'>{event.name}</Link>
                        <p className='font-normal text-white'>{event.shortDescription}</p>
                       </div>
                    </div>
                </div>

                ))} 
            </div>
    </section>
  )
}

export default Event