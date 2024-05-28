import React from 'react'
import { GrLocation } from "react-icons/gr";

const Location = () => {
  return (
    <section className='w-full min-h-[50vh] pt-20 flex flex-col self-start pl-20 font-sans'>
        <h1 className='font-bold text-3xl'>Location</h1>
        <br />
        <address className='flex gap-3 items-center font-semibold text-xl'><GrLocation/>
        N.H. 58, Delhi-Roorkee Highway, Baghpat Bypass Road Crossing, Meerut, Uttar Pradesh 250005
        </address>
        <br />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5789.424610474279!2d77.64030624239425!3d28.973538115344088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fe0fe5a43%3A0x2c84be62c12f514d!2sM.I.E.T.%20College%20Library!5e0!3m2!1sen!2sin!4v1716918118024!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default Location