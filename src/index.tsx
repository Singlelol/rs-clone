import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/mainPage/mainPage';
import './index.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
);
