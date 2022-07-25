import React from 'react';
import './Weather.css';

export default function Weather() {
  return (
    <div className='Weather'>
      <h2>Today is Monday,</h2>
      <h3>the 25th of July 2022 </h3>
      <form>
        <input
          type='search'
          placeholder='Input a city...'
          className='input-form'
        />
        <input type='submit' value='Submit' className='btn btn-primary' />
      </form>
      <h1>just now in Paris</h1>
      <div className='row'>
        <div className='col-6'>
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
