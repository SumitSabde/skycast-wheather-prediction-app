import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';   

export default function SearchBox({updateWeatherInfo}) {
    let[city,setcity] = useState('');
    const API_URL= 'https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}';
    const API_KEY = 'fe3014103044e3b8b003a9f01465f97a';

    let  getWeather = async () => {
        let response = await fetch(`${API_URL.replace('{API_KEY}', API_KEY).replace('London', city)}&units=metric`);
        let data = await response.json();
        

        let result = {

            city: data.name,
            description: data.weather[0].description,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            
            
            
            
        }
        console.log(result);
        return result;
    }
    

    let handleChange = (event) => {
        setcity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setcity('');
        let newinfo=await getWeather();
        updateWeatherInfo(newinfo);
        
    }

    return (
        <div className='SearchBox'> 
            
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="city Name" variant="outlined" value={city} onChange={handleChange}required/>
                <br /><br />
                <Button variant="contained"  type='submit' className='button'> Search</Button>
                
            </form>
        </div>
    )};