import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyInfo from './MyInfo'
import './index.css';

function MyApplication()
{
    return (
        <ul>
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
        </ul>
    )
}




// JSX

//  ReactDOM.render(
//    <App />,
//  //   <h1>Hello World!</h1>,
//    document.getElementById('root')
//  );

// Challenge - Render an unordered list using ReactDOM
ReactDOM.render(
    // <MyApplication/>,
    <MyInfo/>,
    document.getElementById('root')
);

