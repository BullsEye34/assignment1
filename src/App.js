import React from 'react';
import g from './g.svg';
import m from './m.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 style={{fontFamily:'montserrat', color: 'white'}}>P Vamshi Prasad</h1>
      </div>
      <div className="body">
        <img src={g} className="Logo" alt="" srcset=""/>
        <img src={m} className="Logo" alt="" srcset=""/>
      </div>
      <div className="competitors">
        <h1 style={{fontFamily:'montserrat', color: 'black'}}>They Both Are Competitors</h1>
      </div>
    </div>
  );
}

export default App;
