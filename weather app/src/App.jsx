import { useState,useEffect } from 'react'
import WeatherInput from './Component/WeatherInput';


function App() {
  const [city, setCity] = useState('')
  const [Loading,setLoading] =  useState(false);
  const [weather,setWeather] = useState(null);
  const [error,setError]  = useState(null)
  
  useEffect(()=>  {
    const fetchWeather  =  async ()  => {
      try {
          setLoading(true)
           if (!city) return
          const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



      const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=${API_KEY}`)
        if (!response.ok)  throw new Error('fetch failed');
        
          const data = await response.json();
            setWeather(data);
             } catch (err) {
            setError(err.message)
      }  finally {
        setLoading(false)

      }
    }
    fetchWeather()
  },[city])
 

  return(

  <div>
    <WeatherInput 
     
    />
    <WeatherInformation />
  </div>
  )
}

export default App
