import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import AppContextProvider from "./context/Appcontext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AppContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppContextProvider>

);

