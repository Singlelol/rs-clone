/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';

interface Props {
  background?: string;
  children: React.ReactNode;
  height?: string;
  width?: string;
  disabled?: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const Button: React.FC<Props> = ({
  background,
  children,
  height,
  width,
  disabled,
}) => {
  let mainLink: string = '';

  // eslint-disable-next-line default-case
  switch (children) {
    case 'New Game':
      mainLink = '/players';
      break;
    case 'Continue':
      mainLink = '/game';
      break;
    case 'Credits':
      mainLink = '/credits';
      break;
  }

  const { play, changePlayers } = useContext(Context);

  const checkContinueGame = () => {
    // if (children === 'Continue') {
    //   const savePlayerStatus = JSON.parse(
    //     localStorage.getItem('PlayersStatus') as string,
    //   );
    //   console.log(savePlayerStatus);
    //   changePlayers(savePlayerStatus);
    // }
    if (children === 'New Game') {
      localStorage.setItem('borders', '');
      localStorage.setItem('startArr', '');
      localStorage.setItem('PlayersStatus', '');
      localStorage.setItem('gameField', '');
    }
  };

  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor: background,
        height,
        width,
      }}
      onClick={() => checkContinueGame()}
    >
      <Link to={mainLink} className='main-link'>
        {children}
      </Link>
    </button>
  );
};

Button.defaultProps = {
  background: '#241005ef',
  height: '23rem',
  width: '130rem',
};
