import { PlayerProps } from './Players-card-interface';
import './PlayerCard.scss';
import { heroes } from '../../data/heroes';

const PlayerChip = ({ player }: PlayerProps) => {
  const hero = heroes.filter((elem) => elem.name === player.hero);
  return (
    <img className='players-card__img' src={hero[0].image} alt='player-img' />
  );
};

export default PlayerChip;
