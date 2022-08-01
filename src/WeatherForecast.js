import React, { useState } from 'react';

import './WeatherForecast.css';

import axios from 'axios';
import ForecastDay from './ForecastDay';

export default function WeatherForecast(props) {
  console.log(props);
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='WeatherForecast'>
        <div className='row'>
          <div className='col'>
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = 'e75845b1b358b448cb604a8d108e8ed3';

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
