import './App.css';
import React from 'react';

class App extends React.Component{

  render{
    return (
      <div className="container">
        <h1>{count}</h1>
        {/* <button onClick={incrementer}>Click Me</button> */}
      </div>
    );
  }
  
}

export default App;
