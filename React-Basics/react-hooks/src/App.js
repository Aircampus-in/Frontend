import './App.css';
import React from 'react';

class App extends React.Component{


  state={
    count: 0
  }

  incrementer=()=>{
    this.setState({count: this.state.count + 1})
  }
  render(){
    return (
      <div className="container">
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementer}>Click Me</button>
      </div>
    );
  }
  
}

export default App;
