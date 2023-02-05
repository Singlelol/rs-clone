/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../../components/background/8714ae6ce6ff.png';
import { Button } from '../../components/buttons/button_on_mainPage';
import './mainPage.scss';
import '../../components/buttons/button_style_mainPage.scss';
// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const MainPage = () => {
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
                background={Button.defaultProps?.background}
                height={Button.defaultProps?.height}
                width={Button.defaultProps?.width}
                // eslint-disable-next-line react/no-children-prop
                children='Load'
              />
            </li>
            <li>
              <Button
                background={Button.defaultProps?.background}
                height={Button.defaultProps?.height}
                width={Button.defaultProps?.width}
                // eslint-disable-next-line react/no-children-prop
                children='Statistic'
              />
            </li>
            <li>
              <Button
                background={Button.defaultProps?.background}
                height={Button.defaultProps?.height}
                width={Button.defaultProps?.width}
                // eslint-disable-next-line react/no-children-prop
                children='Credits'
              />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
