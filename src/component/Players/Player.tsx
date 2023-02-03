import { PlayerProps } from '../../pages/PlayerSettings-interface';
import Slyder from '../Slider/Slyder';
import './players.scss';

const Player = ({ player, decrease }: PlayerProps) => {
  return (
    <div className='player'>
      <span className='player__id'>{player.id}</span>
      <input type='text' placeholder={player.name} className='player__name' />
      <div className='player__toogle'>
        <span>AI</span>
        <input type='checkbox' defaultChecked={player.isHuman} />
        <span>Human</span>
      </div>
      <Slyder />
      <input type='button' className='player__btn-delete' onClick={decrease} />
    </div>
  );
};

export default Player;
