import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './App.css';

function App() {
  // 1. This state holds the data for the whole app
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  // 2. This function allows SearchBox to update the state
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ 
          // Off-white / Cream gradient
          background: "linear-gradient(to bottom right, #ffffff, #e6e6e6)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          
          padding: "20px", 
          borderRadius: "15px",
          textAlign: "center"
      }}>
      <h2>Weather App by React & Python</h2>
      
      {/* Pass the update function to SearchBox */}
      <SearchBox updateInfo={updateInfo} />
      
      {/* Pass the data to InfoBox to display it */}
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default App;






