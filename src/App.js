import React from 'react';

import Header from './Components/Header'
import Body from './Components/Body'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Body/>
      </header>
    </div>
  );
}

export default App;

//
