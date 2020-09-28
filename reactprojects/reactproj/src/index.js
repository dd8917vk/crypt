import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Lake = (props) => { return (
  <h1>{props.name}</h1>
)};

const lakeList = ['Echo', 'Maud', 'Cascade'];

let App = (props) => { return (
  <div>
    <ul>
      {props.lakes.map(lake => <li>{lake}</li>)}
    </ul>
  </div>
)};
ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById('root')
);