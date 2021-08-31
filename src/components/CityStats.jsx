import React, {useEffect, useState} from 'react';
import '../styles/CityStats-styles.css'

export const CityStats = ({city}) => {

    const [cityWeather, setCityWeather] = useState({})

    useEffect(() => {
        getWeather(city)
    },[city])
    
    
    const getWeather = async(city) => {

        try{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26928c49912469f72cb5cf1d8b5aca32&units=metric&lang=es`;
            
            const resp = await fetch(url);
            const data = await resp.json();
    
            console.log(data);
    
            const actualStats = {
                name: data.name,
                temp: data.main.temp,
                country: data.sys.country,
                sky: data.weather[0].main
            }
            // setCityWeather(data.main.temp)
            setCityWeather(actualStats)

        } catch (err) {
            
            if(err) {
                alert('City not found')
                setCityWeather({})
            }
        }

    }
    console.log(cityWeather)
    
    return (
        <div className='data'>
            <h1 className='temp'>{cityWeather.temp}º</h1>
            <h3>{cityWeather.name}, {cityWeather.country} /</h3>
            <h8>{cityWeather.sky}</h8>
        </div>
    )
}
