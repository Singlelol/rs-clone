import { useState } from 'react';
import './slyder.scss';
import '../Popup/popup.scss';
import '../Counter/counter.scss';
import arr from '../../images/arror.png';
import { heroes } from '../../data/heroes';
import Popup from '../Popup/Popup';

export default function Slyder() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevImgIndex = activeIndex ? activeIndex - 1 : heroes.length - 1;
  const nextImgIndex = activeIndex === heroes.length - 1 ? 0 : activeIndex + 1;

  const [activeIcon, setActiveIcon] = useState(false);
  const btnClassName = activeIcon ? 'icon-active' : 'icon-inactive';
  const btnClasses = ['icon', btnClassName];

  const [activePopup, setActivePopup] = useState(false);
  const popupClassName = activePopup
    ? 'popup-wrapper--active'
    : 'popup-wrapper--inactive';
  const popupClasses = ['popup-wrapper', popupClassName];

  const changeHero = () => {
    setActiveIndex(activeIndex === 0 ? heroes.length - 1 : activeIndex - 1);
    setActiveIcon((prev) => !prev);
  };

  return (
    <div className='slider-wrapper'>
      <div className={popupClasses.join(' ')}>
        <Popup />
      </div>
      <button
        type='button'
        className='control__btn'
        onClick={() => changeHero()}
      >
        <img src={arr} className='prev' alt='удалить игрока' />
      </button>
      <div className='slider'>
        <div className='slider__img slider__img--prev' key={prevImgIndex}>
          <img
            src={heroes[prevImgIndex].image}
            className='icon'
            alt='player-img'
          />
        </div>
        <div
          className='slider__img'
          key={activeIndex}
          onClick={() => setActiveIcon((prev) => !prev)}
        >
          <img
            src={heroes[activeIndex].image}
            className={btnClasses.join(' ')}
            alt='player-img'
            onMouseEnter={() => setActivePopup((prev) => !prev)}
            onMouseLeave={() => setActivePopup((prev) => !prev)}
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
        <img src={arr} className='next' alt='удалить игрока' />
      </button>
    </div>
  );
}
