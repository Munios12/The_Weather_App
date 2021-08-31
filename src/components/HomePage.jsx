import React, {useState} from 'react'
import { CityStats } from './CityStats'
import {Form} from './Form'
import '../styles/HomePage-styles.css'

export const HomePage = () => {

    const [city, setCity] = useState('Valencia')
    
    console.log(city)
    return (
        <div className='homepage'>
            <div className='imgBg'></div>
            <div className='card'>

                <h1>the weather</h1>

                <div className='textAndInput'>
                    <h6>Please, write a city</h6>
                    <Form setCity={setCity}></Form>
                </div>

                <CityStats 
                    key={city}
                    category={city}
                    city={city}
                />
                        
            </div>
        </div>
    )
}







