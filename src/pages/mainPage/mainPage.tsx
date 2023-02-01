/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../../components/background/8714ae6ce6ff.png';
import './mainPage.css';

function mainPage() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={image} className='App-logo' alt='img' />
        <div className='list_link'>
          <ul>
            <li>
              <a href='#'>New Game</a>
            </li>
            <li>
              <a href='#'>Load</a>
            </li>
            <li>
              <a href='#'>Statistic</a>
            </li>
            <li>
              <a href='#'>Credits</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
export default mainPage;
