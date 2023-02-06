import React from 'react';
import ReactDOM from 'react-dom/client';
import { GameFieldPage } from './pages/gameField/GameFieldPage';
// import { MainPage } from './pages/mainPage/mainPage';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GameFieldPage />
    {/* <MainPage /> */}
  </React.StrictMode>,
);
