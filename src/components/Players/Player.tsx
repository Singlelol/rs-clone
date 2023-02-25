import { PlayerProps } from '../../pages/playersPage/PlayerSettings-interface';
import { Slyder } from '../Slider/Slyder';
import './players.scss';

export const Player = ({ player, decrease }: PlayerProps) => {
  return (
    <div className='player'>
      <span className='player__id'>{player.id}</span>
      <h3 className='player__name'>{player.name}</h3>
      <Slyder player={player} />
      <input type='button' className='player__btn-delete' onClick={decrease} />
    </div>
  );
};
