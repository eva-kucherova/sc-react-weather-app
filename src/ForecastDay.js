import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function ForecastDay(props) {
  return (
    <div className='ForecastDay'>
      <div className='forecast-day fw-bolder'>{props.data.dt} </div>
      <div className='forecast-icon my-2'>
        {' '}
        <WeatherIcon code={props.data.weather[0].icon} size={48} />
      </div>

      <div className='forecast-temp-max'>max {props.data.temp.max}°C</div>
      <div className='forecast-temp-min'>min {props.data.temp.min}°C</div>
      <div className='forecast-wind'>💨 {props.data.wind_speed}km/h</div>
      <div className='forecast-description'>{props.data.weather[0].main}</div>
    </div>
  );
}
