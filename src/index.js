import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> Needs to be removed for ChatBot to work without doubling all messages...
    <App />
  // </React.StrictMode>
);
