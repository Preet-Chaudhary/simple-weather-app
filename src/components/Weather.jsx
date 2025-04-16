import React from 'react'

const Weather = (prop) => {
  return (
    <div className='text-white'>
        <h1>The temperature in {prop.city} is {prop.temp}</h1>
    </div>
  )
}

export default Weather