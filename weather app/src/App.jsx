  import { useState,useEffect } from 'react'
  import WeatherInput from './Component/WeatherInput';
  import WeatherInformation from './Component/WeatherInformation';


  function App() {
    const [city, setCity] = useState('')
    const [loading,setLoading] =  useState(false);
    const [weather,setWeather] = useState(null);
    const [error,setError]  = useState(null)
    
    useEffect(()=>  {
      const fetchWeather  =  async ()  => {
        try { 
            if (!city) return
            setLoading(true)
            const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
          const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
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

    <div className='flex flex-col  justify-center items-center  min-h-screen bg-gray-100   '> 
      
            <WeatherInput 
              onSearch = {setCity}
            />
            <WeatherInformation 
              onResult  = {weather}
              onLoading = {loading}
              onError= {error}
            />
          
    </div>
    )
  } 

  export default App
