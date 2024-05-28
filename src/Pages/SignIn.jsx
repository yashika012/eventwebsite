import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoEyeSharp } from "react-icons/io5";




const SignIn = () => {
  return (
    <section className='w-full min-h-screen bg-sign flex pt-20'>
        <div className='flex flex-col gap-32 sm:pl-5 pl-1 pt-5'>
            {/* <h1 className='text-heading sm:text-5xl text-3xl font-normal font-lalezar'>Eventify</h1> */}
            <p className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base sm:font-bold font-normal font-montserrat lg:w-[350px] md:w-[200px] sm:w-[150px] w-[50px] text-white leading-tight'>Discover tailored events.
                <br />
            Sign up for personalized recommendations today!</p>
        </div>
        <div className='flex flex-col bg-white rounded-tl-3xl rounded-bl-3xl xl:w-[950px] lg:w-[750px] md:w-[550px] w-full  right-0 absolute items-center py-10 md:gap-9 gap-5 h-[640px]'>
        <RxCross1 className='flex self-end sm:text-3xl text-2xl text-eyes'/>
        <h1 className='flex self-start md:pl-32 pl-20  font-montserrat lg:text-5xl md:text-4xl text-3xl font-bold'>Login</h1>
        <div className='flex flex-col gap-3 font-sans font-normal'>
        
        <p  className=' md:text-xl text-lg'> E-mail Address</p>
          <div className='border border-border xl:w-[750px] lg:w-[550px]  w-[350px]  h-12 flex items-center justify-start sm:pl-3 pl-1  rounded-xl md:text-lg text-base'><input type="email" placeholder='Enter e-mail' /></div>
        
        <p  className=' md:text-xl text-lg'> Password</p>
          <div className='border border-border xl:w-[750px] lg:w-[550px]  w-[350px]  h-12 flex items-center justify-between sm:pl-3 pl-1  rounded-xl md:text-lg text-base'><input type="text" placeholder='Enter password' /><IoEyeSharp className='text-eyes text-lg'/></div>
        </div>
        <button className='xl:w-[750px] lg:w-[550px] w-[350px]  h-12 bg-sign rounded-xl font-sans font-bold md:text-2xl text-lg text-white'>Login</button>
        <p className='flex self-start md:pl-32 pl-20  text-text font-normal md:text-xl text-xs'>Do you have an account?<span className='text-para'>Sign up</span></p>
        </div> 
    </section>
  )
}

export default SignIn