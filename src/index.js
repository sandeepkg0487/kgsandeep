import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> //this line is commented due to twice render in clg etc. 
    <App />
  // </React.StrictMode>
);


reportWebVitals();
