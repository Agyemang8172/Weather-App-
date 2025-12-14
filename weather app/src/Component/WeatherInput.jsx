import React, { useState } from 'react'

const WeatherInput = () => {
    const [city,setCity] = useState(null)

    const handleSubmit = (e)  => {
        e.preventDefault()
        if ( city.trim() !== "") {
            fetchWeather(city)
        }
    }

    
  return ( 
   <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Enter city name'
        value={city}
        onChange={(e)=>setCity(e.target.value)}

        
      />
      <button type='submit'>
          Search
      </button>
   </form>
  )
}

export default WeatherInput
