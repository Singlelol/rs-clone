/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from 'react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import soundSFX from '../../sounds/Zombie-Aggressive-Attack-A1.mp3';

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
  const [play] = useSound(soundSFX);

  // eslint-disable-next-line default-case
  switch (children) {
    case 'New Game':
      mainLink = '/players';
      break;
    case 'Load':
      mainLink = '/load';
      break;
    case 'Statistic':
      mainLink = '/statistic';
      break;
    case 'Credits':
      mainLink = '/credits';
      break;
  }
  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor: background,
        height,
        width,
      }}
      onClick={() => {
        play();
      }}
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
