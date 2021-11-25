import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import Tweets from './components/Tweets';
// import Welcome from './components/Welcome'

const App = ()=> {
    return (
      <>
      <Navbar name="Souvik"/>
      <Tweets/>
      </>
    );
  }

export default App;
