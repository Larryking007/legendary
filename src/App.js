import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import Search from './components/search/search';
const Forecast = require('./components/forecast/forecast');
const CurrentWeather = require('./components/search/current-weather/current-weather');
const Forecast = require('./components/forecast/forecast');


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
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
