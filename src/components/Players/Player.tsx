import { PlayerProps } from '../../pages/playersPage/PlayerSettings-interface';
import { Slyder } from '../Slider/Slyder';
import './players.scss';

export const Player = ({ player, decrease }: PlayerProps) => {
  return (
    <div className='player'>
      <span className='player__id'>{player.id}</span>
      <h3 className='player__name'>{player.name}</h3>
      <div className='player__toogle'>
        <span>AI</span>
        <input type='checkbox' defaultChecked={player.isHuman} />
        <span>Human</span>
      </div>
      <Slyder player={player} />
      <input type='button' className='player__btn-delete' onClick={decrease} />
    </div>
  );
};
