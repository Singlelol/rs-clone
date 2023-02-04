import { PlayerProps } from './Players-card-interface';
import './PlayerCard.scss';
import { heroes } from '../../data/heroes';

const PlayerCard = ({ player }: PlayerProps) => {
  const hero = heroes.filter((elem) => elem.name === player.hero);
  return (
    <div className='players-card'>
      <div className='players-card__main'>
        <div className='players-card__info'>
          <img
            className='players-card__img'
            src={hero[0].image}
            alt='player-img'
          />
          <p className='players-card__name'>{player.name}</p>
        </div>
        <div className='players-card__heart'>
          {Array(hero[0].health).fill(
            <div className='players-card__heart-image' />,
          )}
        </div>
      </div>
      <div className='players-card__items'>
        <div className='items'>
          {hero[0].inventory.map((item) => (
            <img className='item' src={item.image} alt='player-invent' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
