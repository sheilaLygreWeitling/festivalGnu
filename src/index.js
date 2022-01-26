import React from 'react';
import ReactDOM from 'react-dom';
import MainImage from './assets/Components/FrontPage/MainImage';
import Welcome from './assets/Components/FrontPage/Welcome';
import BuyTicket from './assets/Components/Header/BuyTicket';
import FestivalName from './assets/Components/Header/FestivalName';
import GnuLogo from './assets/Components/Header/GnuLogo';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <div >
      <div className='p-3 flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <GnuLogo />
          <FestivalName />
        </div>
        <div className='p-3 bg-green-300 rounded-xl '>
          <BuyTicket />
        </div>
      </div>
      <div className=''>
        <div className='absolute'>
          <MainImage />
        </div>
        <div className='relative'>
          <Welcome />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

