import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameFieldPage } from './pages/gamePage/GameFieldPage';
import { PlayerSettings } from './pages/playersPage/PlayerSettings';
import { MainPage } from './pages/mainPage/MainPage';
import { ErrorPage } from './pages/errorPage/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/players' element={<PlayerSettings />} />
        <Route path='/game' element={<GameFieldPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
