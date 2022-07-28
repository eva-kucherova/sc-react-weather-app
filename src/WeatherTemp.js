import React, { useState } from 'react';

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState('celsius');

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit('fahrenheit');
  }

  if (unit === 'celsius') {
    return (
      <div className='WeatherTemp'>
        <span className='main-temp mx-2'>{Math.round(props.celsius)}°</span>{' '}
        <span className='main-units'>
          C|{' '}
          <a href='/' onClick={convertToFahrenheit}>
            F
          </a>{' '}
        </span>
      </div>
    );
  } else {
    return 'F';
  }
}
