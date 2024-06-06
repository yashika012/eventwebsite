import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import host from '../assets/images/Host.png';
import { GrLocation } from 'react-icons/gr';
import { GoArrowDownLeft } from 'react-icons/go';
import { LuCalendarDays, LuClock } from 'react-icons/lu';
import { IoTicketSharp } from 'react-icons/io5';
import { GoShareAndroid } from 'react-icons/go';
import Nav from '../components/Nav';


const EventPage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [tag, setTag] = useState([]);

    useEffect(() => {
        fetch('/data/event.json')
            .then(response => response.json())
            .then(json => {
                const event = json.find(event => event.id === id);
                setData(event || {}); // Ensure data is an object
                setTag(event ? event.tag : []); // Ensure tag is an array
            })
            .catch(error => console.error('Error fetching event data:', error));
    }, [id]);

    // Function to get the image path dynamically
    const getImagePath = (imageName) => {
        return `/src/assets/images/${imageName}`;
    };

    return (
        <div>
            <Nav/>
            <section className='w-full min-h-screen flex flex-col gap-12 py-20 self-start pl-20'>
                <div className='min-h-screen w-full font-sans flex justify-center flex-col pt-16 flex-wrap'>
                    <div className='flex items-center justify-center'>
                        <GoArrowDownLeft className='text-3xl self-start mt-16 mr-4' />
                        <img src={getImagePath(data.image)} alt="" className='w-[1400px] h-[570px]' />
                    </div>
                    {data.banner && data.banner.length > 0 && (
                        <>
                            <h1 className='text-black text-6xl font-bold px-20 pt-5 flex justify-between'>
                                {data.banner[0]} <span className='text-4xl'><GoShareAndroid /></span>
                            </h1>
                            <div className='flex justify-between px-20 pt-10'>
                                <div className='font-semibold'>
                                    <p className='text-3xl'>Date and Time</p>
                                    <p className='flex gap-3 items-center text-lg'><LuCalendarDays /><span>{data.banner[1]}</span></p>
                                    <p className='flex gap-3 items-center text-lg'><LuClock /><span>{data.banner[2]}</span></p>
                                </div>
                                <div className='w-[220px] h-[60px] bg-heading rounded-2xl flex items-center gap-3 justify-center text-2xl'><IoTicketSharp /><span>Register Now</span></div>
                            </div>
                        </>
                    )}
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Hosted By</h1>
                    <p className='flex gap-7 items-center text-xl font-semibold'>
                        <img src={host} alt="" />{data.community}
                    </p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold '>Event Description</h1>
                    <br />
                    <p>{data.description}</p>
                </div>
                {data.location && data.location.length > 0 && (
                    <div className='w-full min-h-[50vh] pt-20 flex flex-col self-start pl-20 font-sans'>
                        <h1 className='font-bold text-3xl'>Location</h1>
                        <br />
                        <address className='flex gap-3 items-center font-semibold text-xl'>
                            <GrLocation />
                            {data.location[0]}
                        </address>
                        <br />
                        <iframe
                            src={data.location[1]}
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                )}
                <div>
                    <h1 className='text-3xl font-bold'>Tags</h1>
                    <br />
                    <div className='flex gap-12 font-normal text-lg w-[1000px] flex-wrap'>
                        {tag.map((point, i) => (
                            <div key={i} className='w-[200px] h-[60px] rounded-full bg-button items-center justify-center flex'>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventPage;
