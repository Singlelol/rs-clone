import { PopupProps } from '../../pages/playersPage/PlayerSettings-interface';
import './popup.scss';

export const Popup = ({ hero }: PopupProps) => {
  const health = 'Здоровье:';
  const description = 'Описание:';
  console.log(hero);
  return (
    <div className='popup'>
      <div className='popup__section'>
        <img className='popup__image' src={hero.image} alt='player-img' />
        <h3 className='popup__name'>{hero.name}</h3>
      </div>
      <div className='popup__health'>
        <span>{health}</span>
        <div>
          {Array(hero?.health)
            .fill(0)
            .map((_, i) => (
              <div className='popup__heart-image' key={i} />
            ))}
        </div>
      </div>
      <span className='popup__subtitle'>{description}</span>
      <p className='popup__description'>{hero.description}</p>
    </div>
  );
};
