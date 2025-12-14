import React, { useState } from 'react'

const WeatherInput = ({onSearch}) => {
    const [inputCity,setInputCity] = useState('')


    const handleSubmit = (e)  => {
        e.preventDefault()
        if ( inputCity.trim() !== "") {
             onSearch(inputCity)
        }
    }

    
  return ( 
   <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Enter city name'
        value={inputCity}
        onChange={(e)=>setInputCity(e.target.value)}

        
      />
      <button type='submit'>
          Search
      </button>
   </form>
  )
}

export default WeatherInput
