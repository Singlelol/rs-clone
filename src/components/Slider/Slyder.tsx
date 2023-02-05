import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { heroes } from '../../data/heroes';
import './slyder.scss';
import arr from '../../images/arror.png';

export const Slyder = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevImgIndex = activeIndex ? activeIndex - 1 : heroes.length - 1;
  const nextImgIndex = activeIndex === heroes.length - 1 ? 0 : activeIndex + 1;

  const changeHero = () => {
    setActiveIndex(activeIndex === 0 ? heroes.length - 1 : activeIndex - 1);
  };

  return (
    <div className='slider-wrapper'>
      <button type='button' className='control__btn' onClick={changeHero}>
        <img src={arr} className='prev' alt='btn-prev' />
      </button>
      <div className='slider'>
        <div className='slider__img slider__img--prev' key={prevImgIndex}>
          <img
            src={heroes[prevImgIndex].image}
            className='icon'
            alt='player-img'
          />
        </div>
        <div className='slider__img' key={activeIndex}>
          <img
            src={heroes[activeIndex].image}
            className='icon'
            alt='player-img'
          />
          <span>{heroes[activeIndex].name}</span>
        </div>
        <div className='slider__img slider__img--next' key={nextImgIndex}>
          <img
            src={heroes[nextImgIndex].image}
            className='icon'
            alt='player-img'
          />
        </div>
      </div>
      <button
        type='button'
        className='control__btn'
        onClick={() =>
          setActiveIndex(
            activeIndex === heroes.length - 1 ? 0 : activeIndex + 1,
          )
        }
      >
        <img src={arr} className='next' alt='btn-next' />
      </button>
      <div className='popup-wrapper'>
        <Popup hero={heroes[activeIndex]} />
      </div>
    </div>
  );
};
