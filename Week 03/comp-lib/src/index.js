import React from 'react';
import ReactDOM from 'react-dom/client';//allows us to write JSX for web browsers
import './index.css';
import App from './App'; //importing the App component (javascript)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
