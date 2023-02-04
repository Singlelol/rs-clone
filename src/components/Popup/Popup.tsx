import { PopupProps } from '../../pages/PlayerSettings-interface';
import './popup.scss';

const Popup = ({ hero }: PopupProps) => {
  const health = 'Здоровье:';
  const description = 'Описание:';
  return (
    <div className='popup'>
      <div className='popup__section'>
        <img className='popup__image' src={hero.image} alt='player-img' />
        <h3 className='popup__name'>{hero.name}</h3>
      </div>
      <div className='popup__health'>
        <span>{health}</span>
        {Array(hero.health).fill(<div className='popup__heart-image' />)}
      </div>
      <span className='popup__subtitle'>{description}</span>
      <p className='popup__description'>{hero.description}</p>
    </div>
  );
};

export default Popup;
