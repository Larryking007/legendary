import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import Search from './components/search/search';
const Currentweather = require('../src/components/search/current-weather/current-weather');
const { WEATHER_API_URL, WEATHER_API_KEY }  = require('./api');

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, foreCastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const foreCastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForeCast({city: searchData.label, ...foreCastResponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      {currentWeather && <Currentweather data={currentWeather}/>}
    </div>
  );
}

export default App;
