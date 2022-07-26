import React from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather() {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = 'e75845b1b358b448cb604a8d108e8ed3';
  let city = 'Paris';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className='Weather mt-5 mb-2'>
      <h2>Today is Monday,</h2>
      <h3>the 25th of July 2022 </h3>
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
      <h1>just now in Paris</h1>
      <div className='row main-weather my-5 p-3'>
        <div className='col-6 text-end clearfix'>
          <img
            src='https://ssl.gstatic.com/onebox/weather/64/sunny.png'
            alt='weather icon'
            className='float-end'
          ></img>
          <span className='main-temp mx-2'>25°</span>{' '}
          <span className='main-units'>C|F</span>
        </div>

        <div className='col-6'>
          <ul>
            <li>
              {' '}
              <strong>Weather:</strong> Sunny
            </li>
            <li>
              {' '}
              <strong>Wind:</strong> 💨 4 km/h
            </li>
            <li>
              {' '}
              <strong>Humidity:</strong> 💧 12%
            </li>
          </ul>
        </div>
      </div>
      <h2>There is no bad weather when your soul smiles!</h2>
    </div>
  );
}
