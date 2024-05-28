import React from 'react'
import host from '../assets/images/Host.png'

const Description = () => {
  return (
    <section className='w-full min-h-screen flex flex-col gap-12 py-20 self-start pl-20'>
        <div>
            <h1 className='text-3xl font-bold'>Hosted By</h1>
            <p className='flex gap-7 items-center text-xl font-semibold'><img src={host} alt="" />Web Enthusiasts</p>
        </div>
        <div>
            <h1 className='text-3xl font-bold '>Event Description</h1>
            <br />
            <p className='text-base font-normal w-[1000px]'>
            Get ready to kick off the Christmas season in Mumbai with <span className='font-bold'>SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!</span>
            <br />
            <span className='italic'>City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!</span>
            <br />
            Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!
            <br />
            <span className='font-bold'>3 Reasons to attend the event:</span>
            <ul className='font-normal'>
                <li>  1. The FIRST Christmas concert of Mumbai!</li>
                <li> 2. A special Christmas Choir!</li>
                <li>3. Special Dance performances and many more surprises!</li>
            </ul>
            </p>
        </div>
        <div>
            <h1 className='text-3xl font-bold'>Tags</h1>
            <br />
           <div className='flex gap-12 font-normal text-lg w-[1000px] flex-wrap'>
           <div className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>Web Development</div>
           <div className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>App Development</div>
           <div className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>AIML Development</div>
           <div className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>Hackathon</div>
           <div className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>Tech Fest</div>
           <div className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>Webinar</div>
           </div>
        </div>
    </section>
  )
}

export default Description