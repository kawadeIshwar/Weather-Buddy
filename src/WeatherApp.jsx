import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import "./index.css";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 28.66,
        humidity: 65,
        temp: 27.14,
        tempMax: 27.14,
        tempMin: 27.14,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather Buddy</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}