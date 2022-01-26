import React from 'react';
import ReactDOM from 'react-dom';
import FestivalName from './assets/Components/Frontpage/FestivalName';
import GnuLogo from './assets/Components/Frontpage/GnuLogo';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-yellow-500 via-neutral-900 to-stone-400'>
      <div className='flex'>
        <GnuLogo />
        <FestivalName />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

