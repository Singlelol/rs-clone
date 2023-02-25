import React from 'react';
import { Button } from '../../components/buttons/Button_on_mainPage';
import './mainPage.scss';
import '../../components/buttons/button_style_mainPage.scss';
import image from '../../images/main-background.png';

// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
const btnName: string[] = ['New Game', 'Load', 'Credits'];
export const MainPage = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={image} className='App-logo' alt='img' />
        <div className='list_link'>
          <ul className='list_li'>
            {btnName.map((btn) => (
              <li key={btn}>
                <Button disabled={btn === 'Load'}>{btn}</Button>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};
