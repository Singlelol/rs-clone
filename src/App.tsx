import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameFieldPage } from './pages/gamePage/GameFieldPage';
import { PlayerSettings } from './pages/playersPage/PlayerSettings';
import { MainPage } from './pages/mainPage/MainPage';
import { ErrorPage } from './pages/errorPage/ErrorPage';
import { PlayerType } from './pages/playersPage/PlayerSettings-interface';

const startplayers: PlayerType[] = [
  { id: 1, name: 'Player1', isHuman: true, hero: 'Саша' },
];

// create context
export const Context = createContext({
  play: [startplayers],
  changePlayers: () => void,
});
function App() {
  const [play, setPlayers] = useState<PlayerType[]>([]);

  const changePlayers = (arr: PlayerType[]) => {
    setPlayers([...arr]);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ play, changePlayers }}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/players' element={<PlayerSettings />} />
        <Route path='/game' element={<GameFieldPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
