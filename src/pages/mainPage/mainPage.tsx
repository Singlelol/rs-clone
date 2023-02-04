/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../../components/background/8714ae6ce6ff.png';
import './mainPage.css';
// eslint-disable-next-line spaced-comment
import Button from '../../components/buttons/button_on_mainPage';

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
              <Button
                color='rgba(222, 106, 23, 0.97)'
                background='#241005ef'
                height='34px'
                onClick={() => console.log('!')}
                width='200px'
                // eslint-disable-next-line react/no-children-prop
                children='Load'
                font_weight='bold'
                font_size='24px'
              />
            </li>
            <li>
              <Button
                color='rgba(222, 106, 23, 0.97)'
                background='#241005ef'
                height='34px'
                onClick={() => console.log('!')}
                width='200px'
                // eslint-disable-next-line react/no-children-prop
                children='Statistic'
                font_weight='bold'
                font_size='24px'
              />
            </li>
            <li>
              <Button
                color='rgba(222, 106, 23, 0.97)'
                background='#241005ef'
                height='34px'
                onClick={() => console.log('!')}
                width='200px'
                // eslint-disable-next-line react/no-children-prop
                children='Credits'
                font_weight='bold'
                font_size='24px'
              />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
export default mainPage;
