import { PlayerProps } from '../../pages/PlayerSettings-interface';
import './players.scss';
// import { heroes } from '../../data/heroes';
// import img from ' /images/boris.png';

export default function Player({ player, decrease }: PlayerProps) {
  return (
    <div className='player'>
      <span className='player__id'>{player.id}</span>
      <input type='text' placeholder={player.name} className='player__name' />
      <div className='player__toogle'>
        <span>II</span>
        <input type='checkbox' defaultChecked={player.isHuman} />
        <span>Human</span>
      </div>
      {/* <img src={img} alt='player-img' /> */}
      <input type='button' className='player__btn-delete' onClick={decrease} />
    </div>
  );
}
