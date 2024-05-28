import React from 'react'
import {data} from '../components/data'
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import {useState} from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
    const [show,setShow] = useState(false)
  return (
    <nav className='flex min-h-[10vh] w-full bg-sign fixed z-40 top-0 font-montserrat '>
      <div className='flex justify-between px-7 items-center font-montserrat font-semibold text-2xl text-white w-full'>
        <h1 className='text-heading sm:text-5xl text-3xl font-normal font-lalezar'>Eventify</h1>
        <div className='block md:hidden text-2xl z-50' onClick={()=> setShow(!show)}>
      {show ?<RxCross1 className='text-black'/>:<RiMenu3Fill />}
    </div>
        <ul className={` text-black font-bold flex w-[200px] h-[400px] md:hidden justify-between flex-col absolute ${show ? "right-0":"right-[-100%]"} duration-500 ease-in-out  top-0 py-10 px-8 rounded-bl-xl bg-heading`}>
      {data.map((data,index)=>(
          <a href={data.path} key={index}>{data.name}</a>
        ))}
    </ul>
    <ul className='hidden w-[550px] md:flex justify-between items-center text-lg'>
      {data.map((data,index)=>(
          <a href={data.path} key={index}>{data.name}</a>
        ))}
    </ul>
      </div>
    </nav>
  )
}

export default Nav