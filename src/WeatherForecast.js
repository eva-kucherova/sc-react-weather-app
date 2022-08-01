import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

export default function WeatherForecast() {
  return (
    <div className='WeatherForecast'>
      <div className='row'>
        <div className='col'>
          <div className='forecast-day fw-bolder'>Thursday </div>
          <div className='forecast-icon my-2'>
            {' '}
            <WeatherIcon code='01d' size={48} />
          </div>

          <div className='forecast-temp-max'>max 19°C</div>
          <div className='forecast-temp-min'>min 10°C</div>
          <div className='forecast-wind'>💨 4 km/h</div>
          <div className='forecast-description'>Cloudy</div>
        </div>
      </div>
    </div>
  );
}
