import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function ForecastDay(props) {
  function maxTemp() {
    return Math.round(props.data.temp.max);
  }

  function minTemp() {
    return Math.round(props.data.temp.min);
  }

  function Wind() {
    return Math.round(props.data.wind_speed);
  }

  function Day() {
    let date = new Date(props.data.dt * 1000);

    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return days[date.getDay()];
  }

  return (
    <div className='ForecastDay'>
      <div className='forecast-day fw-bolder'>{Day()} </div>
      <div className='forecast-icon my-2'>
        {' '}
        <WeatherIcon code={props.data.weather[0].icon} size={48} />
      </div>

      <div className='forecast-temp-max'>max {maxTemp()}°C</div>
      <div className='forecast-temp-min'>min {minTemp()}°C</div>
      <div className='forecast-wind'>💨 {Wind()} km/h</div>
      <div className='forecast-description'>{props.data.weather[0].main}</div>
    </div>
  );
}
