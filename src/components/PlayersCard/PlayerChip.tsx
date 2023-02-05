import { PlayerProps } from './Players-card-interface';
import { findHeroName } from '../../utilities/utilities';
import './PlayerCard.scss';

export const PlayerChip = ({ player }: PlayerProps) => {
  const hero = findHeroName(player);
  return (
    <img className='players-card__img' src={hero?.image} alt='player-img' />
  );
};
