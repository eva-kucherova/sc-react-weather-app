import React, { useState } from 'react';

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState('celsius');

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit('celsius');
  }

  if (unit === 'celsius') {
    return (
      <div className='WeatherTemp'>
        <span className='main-temp mx-2'>{Math.round(props.celsius)}°</span>{' '}
        <span className='main-units'>
          C|{' '}
          <a href='/' onClick={showFahrenheit}>
            F
          </a>{' '}
        </span>
      </div>
    );
  } else {
    return (
      <div className='WeatherTemp'>
        <span className='main-temp mx-2'>{Math.round(props.celsius)}°</span>{' '}
        <span className='main-units'>
          <a href='/' onClick={showCelsius}>
            C
          </a>
          | F{' '}
        </span>
      </div>
    );
  }
}
