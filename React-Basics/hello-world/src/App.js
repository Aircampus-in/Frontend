import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import Tweets from './components/Tweets';
import Counter from './components/Counter'

const App = ()=> {
    return (
      <>
      <Navbar name="Souvik"/>
      <Tweets/>
      <Counter/>
      </>
    );
  }

export default App;
