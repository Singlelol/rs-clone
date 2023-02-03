// import { useState } from 'react';
import { PlayerProps } from '../../pages/PlayerSettings-interface';
import Slyder from '../Slider/Slyder';
import './players.scss';
// import { heroes } from '../../data/heroes';

export default function Player({ player, decrease }: PlayerProps) {
  // const hero = heroes.filter((item) => item.id === player.id);
  // const [allheroes, setAllHeroes] = useState(false);
  // const btnClassName = allheroes ? 'icons-show' : 'icons-hide';

  // const btnClasses = ['icons', btnClassName];

  return (
    <div className='player'>
      <span className='player__id'>{player.id}</span>
      <input type='text' placeholder={player.name} className='player__name' />
      <div className='player__toogle'>
        <span>AI</span>
        <input type='checkbox' defaultChecked={player.isHuman} />
        <span>Human</span>
      </div>
      {/* <div className='player__icons'>
        <ul className={btnClasses.join(' ')}>
          {heroes.map((item) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li onClick={changeHero}>
              <img src={item.image} className='icon' alt='player-img' />
            </li>
          ))}
        </ul>
        <div
          className='hero-description'
          onClick={() => {
            setAllHeroes((prev) => !prev);
          }}
        >
          <img src={hero[0].image} className='icon' alt='player-img' />
        </div>
      </div> */}
      <Slyder />
      <input type='button' className='player__btn-delete' onClick={decrease} />
    </div>
  );
}
