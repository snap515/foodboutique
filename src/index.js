import React from 'react';
import ReactDOM from 'react-dom/client';

// import 'reset-css';
import './index.css';
import './fonts.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/foodboutique">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
