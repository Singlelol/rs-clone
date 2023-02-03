import { useState } from 'react';
import Counter from '../component/Counter/Counter';
import Player from '../component/Players/Player';
import { IPlayer } from './PlayerSettings-interface';
import '../style.scss';

export default function PlayerSettings() {
  const maxPlayers = 5;
  const startplayers: IPlayer[] = [{ id: 1, name: 'Player1', isHuman: true }];
  const [players, setPlayers] = useState<IPlayer[]>(startplayers);

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
  console.log(players);

  const decrease = () => {
    if (players.length > 1 && players.length <= maxPlayers) {
      players.pop();
      console.log(players);
      setPlayers([...players]);
    }
  };

  return (
    <div className='wrapper'>
      <div className='settings-menu'>
        <h1>Выберите количество игроков:</h1>
        <Counter
          counter={players.length}
          increase={increase}
          decrease={decrease}
        />
        <div className='players'>
          <h3 className='player__subtitle'>Список игроков</h3>
          {players.map((player) => (
            <Player key={player.id} player={player} decrease={decrease} />
          ))}
        </div>
      </div>
    </div>
  );
}
