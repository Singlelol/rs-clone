import React from 'react';
import ReactDOM from 'react-dom/client';
import GameField from './components/GameField/GameField';
import { MainPage } from './pages/mainPage/mainPage';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GameField />
    <MainPage />
  </React.StrictMode>,
);
