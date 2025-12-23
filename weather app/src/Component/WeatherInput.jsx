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
