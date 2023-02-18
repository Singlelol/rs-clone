/* eslint-disable import/no-cycle */
import React, { createContext, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameFieldPage } from './pages/gamePage/GameFieldPage';
import { PlayerSettings } from './pages/playersPage/PlayerSettings';
import { MainPage } from './pages/mainPage/mainPage';
import { CreditPage } from './pages/creditPage/CreditsPage';
// import { ErrorPage } from './pages/errorPage/ErrorPage';

import { PlayerType } from './pages/playersPage/PlayerSettings-interface';
import { heroes } from './data/heroes';

export const Context = createContext({
  play: [
    { id: 1, name: 'Player1', isHuman: true, hero: heroes[0] },
  ] as PlayerType[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePlayers: (_arr: Array<PlayerType>) => {},
});

function App() {
  const [play, setPlayers] = useState<PlayerType[]>([
    { id: 1, name: 'Player1', isHuman: true, hero: heroes[0] },
  ]);

  const changePlayers = useMemo(
    () => (arr: PlayerType[]) => {
      setPlayers(arr);
    },
    [],
  );

  const players = useMemo(
    () => ({ play, changePlayers }),
    [play, changePlayers],
  );

  return (
    <Context.Provider value={players}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/players' element={<PlayerSettings />} />
        <Route path='/game' element={<GameFieldPage />} />
        <Route path='/credits' element={<CreditPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
