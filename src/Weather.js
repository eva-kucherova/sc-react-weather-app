import React from 'react';
import './Weather.css';

export default function Weather() {
  return (
    <div className='Weather mt-5 mb-2'>
      <h2>Today is Monday,</h2>
      <h3>the 25th of July 2022 </h3>
      <form className='search-form my-3'>
        <input
          type='search'
          placeholder='Input a city...'
          className='input-form'
        />
        <input type='submit' value='Submit' className='btn btn-primary ms-3' />
      </form>
      <h1>just now in Paris</h1>
      <div className='row main-weather my-5 p-3'>
        <div className='col-6 text-end'>
          <img
            src='https://ssl.gstatic.com/onebox/weather/64/sunny.png'
            alt='weather icon'
            width='64px'
          ></img>
          25°C|F
        </div>

        <div className='col-6'>
          <ul>
            <li>Weather: Sunny</li>
            <li>Wind: 💨 4 km/h</li>
            <li>Humidity: 💧 12%</li>
          </ul>
        </div>
      </div>
      <h2>There is no bad weather when your soul smiles!</h2>
    </div>
  );
}
