import { PlayerProps } from './Players-card-interface';
import './PlayerCard.scss';

export const PlayerCard = ({ player }: PlayerProps) => {
  const { hero } = player;
  return (
    <div className='players-card'>
      <div className='players-card__main'>
        <div className='players-card__info'>
          <img
            className='players-card__img'
            src={hero?.image}
            alt='player-img'
          />
          <p className='players-card__name'>{player.name}</p>
        </div>
        <div className='players-card__heart'>
          {Array(hero?.health)
            .fill(0)
            .map((_, i) => (
              <div className='players-card__heart-image' key={i} />
            ))}
        </div>
      </div>
      <div className='players-card__items'>
        <div className='items'>
          {hero?.inventory.map((item, i) => (
            <img
              className='item'
              src={item.image}
              alt='player-invent'
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
