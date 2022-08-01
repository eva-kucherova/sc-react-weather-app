import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';
import WeatherTemp from './WeatherTemp';
import WeatherIcon from './WeatherIcon';
import WeatherForecast from './WeatherForecast';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      mainTemp: response.data.main.temp,
      mainWind: response.data.wind.speed,
      mainHumidity: response.data.main.humidity,
      data: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
    console.log(new Date());
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = 'e75845b1b358b448cb604a8d108e8ed3';

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
        <form className='search-form my-3' onSubmit={handleSubmit}>
          <input
            type='search'
            placeholder='Input a city...'
            className='input-form'
            autoFocus='on'
            onChange={handleCityChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-primary ms-3 shadow-sm'
          />
        </form>

        <h2>Today is {day},</h2>
        <h3>
          {weatherData.data.getDate()} of {month},{' '}
          {weatherData.data.getFullYear()}{' '}
        </h3>

        <h1>just now in {weatherData.city}</h1>
        <div className='row main-weather my-5 p-3 '>
          <div className='col-4'>
            <WeatherIcon code={weatherData.icon} size={72} />
          </div>

          <div className='col-4 '>
            <WeatherTemp celsius={weatherData.mainTemp} />
          </div>
          <div className='col-4'>
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
        <WeatherForecast coordinates={weatherData.coordinates} />
        <h2>There is no bad weather when your soul smiles!</h2>
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}
