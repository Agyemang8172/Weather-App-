import React, { useState } from 'react'

const WeatherInput = ({onSearch, city}) => {
  

    const handleSubmit = (e)  => {
         e.preventDefault()
         if ( city.trim() !== "") {
            onSearch(city)
            localStorage.setItem('lastCity',city)
        } 
    }

    
  return ( 
   <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        placeholder='Enter city name'
        value={city}
        onChange={(e)=>onSearch(e.target.value)}
        className='w-72 px-4 py-2 rounded-md border border-gray-400 outline-none focus:border-blue-300  shadow-sm'
    />
      <button type='submit'
      className=' ml-5 px-4 py-2 bg-blue-500  text-white  rounded-md hover:bg-blue-600 transition'>
          Search
      </button>
   </form>
  )
}

export default WeatherInput
