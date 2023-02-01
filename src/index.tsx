import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PlayerSettings from './pages/PlayerSettings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <PlayerSettings />
  </React.StrictMode>,
);
