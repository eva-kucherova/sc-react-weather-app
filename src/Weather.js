import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);

    setWeatherData({
      ready: true,
      mainTemp: response.data.main.temp,
      mainWind: response.data.wind.speed,
      mainHumidity: response.data.main.humidity,
      data: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
    });
    console.log(new Date());
  }

  if (weatherData.ready) {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = days[weatherData.data.getDay()];

    let monthes = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let month = monthes[weatherData.data.getMonth()];

    return (
      <div className='Weather mt-5 mb-2'>
        <h2>Today is {day},</h2>
        <h3>
          {weatherData.data.getDate()} of {month},{' '}
          {weatherData.data.getFullYear()}{' '}
        </h3>
        <form className='search-form my-3'>
          <input
            type='search'
            placeholder='Input a city...'
            className='input-form'
            autoFocus='on'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-primary ms-3 shadow-sm'
          />
        </form>
        <h1>just now in {weatherData.city}</h1>
        <div className='row main-weather my-5 p-3'>
          <div className='col-6 text-end clearfix'>
            <img
              src='https://ssl.gstatic.com/onebox/weather/64/sunny.png'
              alt='weather icon'
              className='float-end'
            ></img>
            <span className='main-temp mx-2'>
              {Math.round(weatherData.mainTemp)}°
            </span>{' '}
            <span className='main-units'>C|F</span>
          </div>

          <div className='col-6'>
            <ul>
              <li className='text-capitalize'>
                {' '}
                <strong>Weather:</strong> {weatherData.description}
              </li>
              <li>
                {' '}
                <strong>Wind:</strong> 💨 {weatherData.mainWind} km/h
              </li>
              <li>
                {' '}
                <strong>Humidity:</strong> 💧{weatherData.mainHumidity} %
              </li>
            </ul>
          </div>
        </div>
        <h2>There is no bad weather when your soul smiles!</h2>
      </div>
    );
  } else {
    let apiKey = 'e75845b1b358b448cb604a8d108e8ed3';
    let city = 'Madrid';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return 'Loading...';
  }
}
