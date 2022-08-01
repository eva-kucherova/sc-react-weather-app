import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = 'e75845b1b358b448cb604a8d108e8ed3';
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='col'>
          <div className='forecast-day fw-bolder'>Thursday </div>
          <div className='forecast-icon my-2'>
            {' '}
            <WeatherIcon code='01d' size={48} />
          </div>

          <div className='forecast-temp-max'>max 19°C</div>
          <div className='forecast-temp-min'>min 10°C</div>
          <div className='forecast-wind'>💨 4 km/h</div>
          <div className='forecast-description'>Cloudy</div>
        </div>
      </div>
    </div>
  );
}
