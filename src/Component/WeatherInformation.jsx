import React from 'react'

const WeatherInformation = ({onLoading,onError,onResult}) => {
  return (
    <div>
        {onError && <h2>Error with the API</h2>}
      { onLoading && <p>Loading.... </p>}
      {  onResult && (
        <div className='margin-2'>
           
            <h2>{onResult.name}</h2>
            <p>Temperature: {onResult.main.temp}K</p>
            <p> Weather : {onResult.weather?.[0]?.description}</p>
        </div>
      )}
    </div>
  )
}

export default WeatherInformation
