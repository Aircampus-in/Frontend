import './App.css';
import React from 'react';

const App=()=>{

  const[count, setCount] = React.useState(0)


  const incrementer=()=>{
    setCount(count+1)
  }
    return (
      <div className="container">
        <h1>{count}</h1>
        <button onClick={incrementer}>Click Me</button>
      </div>
    );
  
}

export default App;
