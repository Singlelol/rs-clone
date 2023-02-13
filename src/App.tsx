/* eslint-disable import/no-cycle */
import React, { createContext, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameFieldPage } from './pages/gamePage/GameFieldPage';
import { PlayerSettings } from './pages/playersPage/PlayerSettings';
import { MainPage } from './pages/mainPage/mainPage';
// import { ErrorPage } from './pages/errorPage/ErrorPage';
import { PlayerType } from './pages/playersPage/PlayerSettings-interface';
import { SpinnerPage } from './pages/controlPanelPage/SpinnerPage';

export const Context = createContext({
  play: [
    { id: 1, name: 'Player1', isHuman: true, hero: 'Саша' },
  ] as PlayerType[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePlayers: (_arr: Array<PlayerType>) => {},
});

function App() {
  const [play, setPlayers] = useState<PlayerType[]>([
    { id: 1, name: 'Player1', isHuman: true, hero: 'Саша' },
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
        <Route path='*' element={<MainPage />} />
        <Route path='/Spinner' element={<SpinnerPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
