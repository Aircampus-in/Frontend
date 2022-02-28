import React from 'react';
import './App.css';
import Input from './components/Input';
import {store} from './app/store';
import {Provider} from 'react-redux';


// const todoList=[
//   {

//   }
// ]

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>My TODO app</h1>
      <Input/>
    </div>
    </Provider>
    
  );
}

export default App;
