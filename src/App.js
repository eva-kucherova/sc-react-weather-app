import React from 'react';
import './App.css';
import Weather from './Weather';
export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='London' />

        <footer className='Footer text-center p-3'>
          Coded by{' '}
          <a
            href='https://zoia-k-responsive-portfolio.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            Zoia_K
          </a>{' '}
          and open-soursed on{' '}
          <a
            href='https://github.com/zoia-k/sc-react-weather-app'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
