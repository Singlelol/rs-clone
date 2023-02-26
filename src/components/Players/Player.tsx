import { useState } from 'react';
import { Slyder } from '../Slider/Slyder';
import { PlayerProps } from '../../pages/playersPage/PlayerSettings-interface';
import './players.scss';

export const Player = ({ player, decrease, setNewName }: PlayerProps) => {
  const [currentName, setCurrentName] = useState(player.name);
  const handleChange = (e: any) => {
    setCurrentName(e.target.value);
  };
  const handleBlur = () => {
    setNewName(player.id, currentName);
  };

  return (
    <div className='player'>
      <span className='player__id'>{player.id}</span>
      <input
        type='text'
        className='player__name'
        defaultValue={currentName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Slyder player={player} />
      <input type='button' className='player__btn-delete' onClick={decrease} />
    </div>
  );
};
