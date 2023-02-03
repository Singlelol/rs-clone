import { PopupProps } from '../../pages/PlayerSettings-interface';
import './popup.scss';

export default function Popup({ hero }: PopupProps) {
  return (
    <div className='popup'>
      <div className='popup__section'>
        <img className='popup__image' src={hero.image} alt='player-img' />
        <h3 className='popup__name'>{hero.name}</h3>
      </div>
      <div className='popup__health'>
        <span>Здоровье:{hero.health}</span>
      </div>
      <span className='popup__subtitle'>Описание:</span>
      <p className='popup__description'>{hero.description}</p>
    </div>
  );
}
