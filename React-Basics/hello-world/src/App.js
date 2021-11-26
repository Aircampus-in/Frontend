import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import Tweets from './components/Tweets';
import Counter from './components/Counter';
import Text from './components/Textarea';

const App = ()=> {
    return (
      <>
      <Navbar name="Souvik"/>
      <div className="container">
        <Tweets/>
        <Counter/>
        <Text/>
      </div>
      
      </>
    );
  }

export default App;
