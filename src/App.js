import React from 'react';

import Header from './Components/Header'
import ResumeModal from './Components/ResumeModal'
import Body from './Components/Body'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <ResumeModal/>
        <Body/>
      </header>
    </div>
  );
}

export default App;

//
