import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Accommodate from './r01/Accommodate'
// import Books from './r02/books';
import SendFrom from './r03/sendForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    {/* <App /> */}
    {/* <Accommodate /> */}
    {/* <Books /> */}
    <SendFrom />
  </React.StrictMode>
  // 엄격 모드다
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
