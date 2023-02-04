import { useState } from 'react';
import { PlayerType } from './PlayerSettings-interface';
import Counter from '../components/Counter/Counter';
import Player from '../components/Players/Player';
import './player-settings.scss';

const PlayerSettings = () => {
  const maxPlayers = 5;
  const title = 'Выберите количество игроков:';
  const list = 'Список игроков';
  const startplayers: PlayerType[] = [
    { id: 1, name: 'Player1', isHuman: true },
  ];
  const [players, setPlayers] = useState<PlayerType[]>(startplayers);

  const increase = () => {
    if (players.length >= 1 && players.length < maxPlayers) {
      const newPlayer = {
        id: Number(players.length + 1),
        name: `Player${players.length + 1}`,
        isHuman: false,
      };
      setPlayers([...players, newPlayer]);
    }
  };

  const decrease = () => {
    if (players.length > 1 && players.length <= maxPlayers) {
      players.pop();
      setPlayers([...players]);
    }
  };

  return (
    <div className='wrapper'>
      <div className='settings-menu'>
        <h1>{title}</h1>
        <Counter
          counter={players.length}
          increase={increase}
          decrease={decrease}
        />
        <div className='players'>
          <h3 className='player__subtitle'>{list}</h3>
          {players.map((player) => (
            <Player key={player.id} player={player} decrease={decrease} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerSettings;
