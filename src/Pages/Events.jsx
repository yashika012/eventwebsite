import React from 'react'
import Event from '../components/Event'
import Banner from '../components/Banner'
import Description from '../components/Description'
import Location from '../components/Location'

const Events = () => {
  return (
    <div>
        <Banner/>
        <Location/>
        <Description/>
        <Event/>
    </div>
  )
}

export default Events