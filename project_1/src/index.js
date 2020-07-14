import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// JSX

/*
 ReactDOM.render(
   <App />,
 //   <h1>Hello World!</h1>,
   document.getElementById('root')
 );
*/

// Challenge - Render an unordered list using ReactDOM
ReactDOM.render(
    <ul><li>Item A</li><li>Item B</li><li>Item C</li></ul>,
    document.getElementById('root')
);
