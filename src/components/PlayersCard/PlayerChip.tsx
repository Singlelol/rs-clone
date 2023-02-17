import { PlayerProps } from './Players-card-interface';
// import { findHeroName } from '../../utilities/utilities';
import './PlayerCard.scss';

export const PlayerChip = ({ player }: PlayerProps) => {
  return (
    <img
      className='players-card__img'
      src={player.hero?.image}
      alt='player-img'
    />
  );
};
