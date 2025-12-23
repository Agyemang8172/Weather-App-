import React, { useState } from 'react'

const WeatherInformation = ({onLoading,onError,onResult}) => {
   const [unit,setUnit] = useState('C')

   if (!onResult ) return null

   const celsiousValue =(onResult.main.temp-273.15)
   const celcious = celsiousValue.toFixed(2)
   const fahrenheit = ((celcious * 9/5) + 32).toFixed(2)

  return (
    <div className='bg-white shadow-md  w-80 p-4 rounded-md mt-6 text-center'>
      {onError && <h2 className='text-3xl text-red-300'>Error with the API</h2>}
      { onLoading && <p className=''>Loading.... </p>}

             <button onClick={() => setUnit(unit === "C" ? "F" : "C ")}
               className='bg-gray-200 px-3 py-1 rounded mb-2'
              >
              Switch to {unit === "C" ? "F" : "C"}
             </button>
      {onResult?.weather[0]?.icon  && (
        <div className='margin-2'>
          <img src = {`https://openweathermap.org/img/wn/${onResult.weather[0].icon}@2x.png`}  
            alt='weather=icon'
            className='mx-auto'
          />

            <h2 className='text-3xl'>Name of City: {onResult.name}</h2>
      
            <p className='text-2xl text-gray-500'>
              Temperature: { unit === "C" ? `${celcious}C` : `${fahrenheit}`}</p>
            <p className='text-2xl text-amber-400'> Weather : {(onResult.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
      )}
    </div>  
  )  
}

export default WeatherInformation
