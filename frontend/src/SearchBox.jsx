import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

// 1. Receive the 'updateInfo' function as a prop
export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");

    const API_URL = "http://127.0.0.1:5000/weather";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?city=${city}`);
            let jsonResponse = await response.json();

            if (jsonResponse.error) {
                alert("City not found!");
                return;
            }

            let result = {
                city: city, // We add the city name here
                temp: jsonResponse.temp,
                tempMin: jsonResponse.tempMin,
                tempMax: jsonResponse.tempMax,
                humidity: jsonResponse.humidity,
                feelsLike: jsonResponse.feelsLike,
                weather: jsonResponse.weather, 
                platform: jsonResponse.platform,
            }
            console.log("Data Source:", result.platform);
            console.log(result);
            // 2. Send the data to App.jsx
            updateInfo(result);

        } catch (err) {
            console.error(err);
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    
    let handleSubmit = (evt) => {
        evt.preventDefault();
        setCity("");
        getWeatherInfo();
    };

    return (
        <div className='SearchBox'>
            {/* Removed the <h3> because App.jsx has a title now */}
            
            <form onSubmit={handleSubmit}>
                <TextField 
                  id="city" 
                  label="City Name" 
                  variant="outlined" 
                  required 
                  value={city}
                  onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'> SEARCH </Button>
            </form>
        </div>
    );
}


