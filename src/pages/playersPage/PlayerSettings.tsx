/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayerType } from './PlayerSettings-interface';
import { Counter } from '../../components/Counter/Counter';
import { Player } from '../../components/Players/Player';
import { Context } from '../../App';
import { heroes } from '../../data/heroes';
import './player-settings.scss';

const maxPlayers = 4;
const title = 'Выберите количество игроков:';
const list = 'Список игроков';
const startText = 'Начать игру';

export const PlayerSettings = () => {
  const { changePlayers } = useContext(Context);
  const startplayers: PlayerType[] = [
    { id: 1, name: 'Player1', isHuman: true, hero: heroes[0] },
  ];
  const [players, setPlayers] = useState<PlayerType[]>(startplayers);

  const increase = () => {
    if (players.length >= 1 && players.length < maxPlayers) {
      const newPlayer = {
        id: Number(players.length + 1),
        name: `Player${players.length + 1}`,
        isHuman: false,
        hero: heroes[0],
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

  const setNewName = (id: number, name: string) => {
    const newPlayers = players.map((player) =>
      player.id === id
        ? { ...player, name: name === '' ? `Player${id}` : name }
        : player,
    );
    setPlayers(newPlayers);
  };

  return (
    <div className='wrapper'>
      <div className='settings-menu'>
        <h2 className='settings-menu__title'>{title}</h2>
        <Counter
          counter={players.length}
          increase={increase}
          decrease={decrease}
        />
        <div className='players'>
          <h3 className='players__subtitle'>{list}</h3>
          {players.map((player) => (
            <Player
              key={player.id}
              player={player}
              setNewName={setNewName}
              decrease={decrease}
            />
          ))}
        </div>
        <button
          className='players__btn'
          type='button'
          onClick={() => {
            changePlayers(players);
          }}
        >
          <Link className='player-link' to='/game'>
            {startText}
          </Link>
        </button>
      </div>
    </div>
  );
};
