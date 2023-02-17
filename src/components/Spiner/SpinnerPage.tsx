import { useSpring, animated } from 'react-spring';
import React, { useState } from 'react';
import './SpinnerPage.scss';
import image from '../../images/Snipper.jpg';
import { getSpinnerCount } from '../../utilities/utilities';

type SpinerType = {
  // eslint-disable-next-line react/require-default-props
  setSpiner: (arg: number) => void;
};

export const SpinnerPage = ({ setSpiner }: SpinerType) => {
  const intialStep = Math.floor(Math.random() * 6); // картинка может быть наклонена вначале
  const [step, setStep] = useState(intialStep);
  const [springs, api] = useSpring(() => ({
    from: { transform: `rotate(${30 * step}deg)` },
  }));

  const handleClick = () => {
    const tmp = Math.floor(Math.random() * 6);
    setStep(tmp);
    api.start({
      from: { transform: `rotate(${30 * step}deg)` },
      to: { transform: `rotate(${360 * 2 - 60 * step}deg)` },
      onRest: () => {
        const st: number = getSpinnerCount(step) as number;
        console.log(`Spinner step ${step}`);
        console.log(`Spinner state in handleClick ${st}`);
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
