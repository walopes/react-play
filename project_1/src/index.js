import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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


function MyInfo()
{
    return (
        <div>
            <h1>Willian A. Lopes</h1>
            <p>Hi, I'm learning React! xD</p>
            <ol>
                This is my top three vacation places:
                <li>Egipt</li>
                <li>Russia</li>
                <li>Peru</li>
            </ol>
        </div>
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

