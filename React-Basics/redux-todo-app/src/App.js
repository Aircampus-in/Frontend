import React from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">My Tasks</h1>
      <Input />
      <Todos />
    </div>
  );
};

export default App;
