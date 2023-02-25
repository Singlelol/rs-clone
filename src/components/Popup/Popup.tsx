import { PopupProps } from '../../pages/playersPage/PlayerSettings-interface';
import './popup.scss';

const HEALTH = 'Здоровье:';
const DESCRIPTION = 'Описание:';

export const Popup = ({ hero }: PopupProps) => {
  console.log(hero);
  return (
    <div className='popup'>
      <div className='popup__section'>
        <img className='popup__image' src={hero.image} alt='player-img' />
        <h3 className='popup__name'>{hero.name}</h3>
      </div>
      <div className='popup__health'>
        <span>{HEALTH}</span>
        {Array(hero?.health)
          .fill(0)
          .map((_, i) => (
            <div className='popup__heart-image' key={i} />
          ))}
      </div>
      <span className='popup__subtitle'>{DESCRIPTION}</span>
      <p className='popup__description'>{hero.description}</p>
    </div>
  );
};
