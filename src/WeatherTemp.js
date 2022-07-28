import React from 'react';

export default function WeatherTemp(props) {
  return (
    <div className='WeatherTemp'>
      <span className='main-temp mx-2'>{Math.round(props.celsius)}°</span>{' '}
      <span className='main-units'>C|F</span>
    </div>
  );
}
