import React from 'react'
import Hero from '../components/Hero'
import Event from '../components/Event'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
        <Hero/>
        <Event/>
    </div>
  )
}

export default Home