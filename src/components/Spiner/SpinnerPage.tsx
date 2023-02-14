import { useSpring, animated } from 'react-spring';
import React, { useState } from 'react';
import './SpinnerPage.scss';
import image from '../../images/Snipper.jpg';
import { getSpinnerCount } from '../../utilities/utilities';

type SpinerType = {
  setSpiner: (arg: number) => void;
};

export const SpinnerPage = ({ setSpiner }: SpinerType) => {
  const [step, setStep] = useState(0);
  const [springs, api] = useSpring(() => ({
    from: { transform: `rotate(${30 * step}deg)` },
  }));

  const handleClick = () => {
    setStep(Math.floor(Math.random() * 6));
    api.start({
      from: { transform: `rotate(${30 * step}deg)` },
      to: { transform: `rotate(${360 * 2 - 60 * step}deg)` },
      onRest: () => {
        const st: number = getSpinnerCount(step) as number;
        // console.log(st);
        setSpiner(st);
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
