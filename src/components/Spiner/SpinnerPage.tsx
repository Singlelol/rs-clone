import { useSpring, animated } from 'react-spring';
import React, { useState } from 'react';
import './SpinnerPage.scss';
import image from '../../images/Wheel.png';
import { getSpinnerCount } from '../../utilities/utilities';

type SpinerType = {
  setSpiner: (arg: number) => void;
};

const circle = 160;
const allCountSteps = 6;
const rotation = 30;

export const SpinnerPage = ({ setSpiner }: SpinerType) => {
  const [step, setStep] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: { transform: `rotate(${rotation * step}deg)` },
  }));

  const handleClick = () => {
    setStep(Math.floor(Math.random() * allCountSteps));
    api.start({
      from: { transform: `rotate(${rotation * step}deg)` },
      to: { transform: `rotate(${circle * 2 - rotation * 2 * step}deg)` },
      onRest: () => {
        const numberOfSteps: number = getSpinnerCount(step) as number;
        setSpiner(numberOfSteps);
      },
    });
  };

  return (
    <div className='deal-wheel'>
      <animated.div style={springs}>
        <img src={image} className='image_backround' alt='img' />
      </animated.div>
      <div className='ticker' />
      <button type='button' className='btn-spin' onClick={handleClick}>
        Покрутить колесо
      </button>
    </div>
  );
};
