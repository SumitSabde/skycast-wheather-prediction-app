import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
export default function WheatherApp() {
    const [weatherinfo, setweatherinfo] = useState({
        city: "Delhi",
        Description: 'clear sky',
        Feelslike: 24.84,
        Humidity: 47,
        Temp: 25.05,
        TempMax: 25.05,
        TempMin: 25.05,

    });
    
    let updateWeatherInfo = (result) => {
        setweatherinfo(result);
    }
    return (
        <div className='background'>
            <h1>🌤️Skycast-Wheather Prediction App </h1>
            <SearchBox updateWeatherInfo={updateWeatherInfo}/>
            <br />
            <InfoBox info={weatherinfo}/>  
        </div>
)};