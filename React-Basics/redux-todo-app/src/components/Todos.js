import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function Todos() {
  const todos = useSelector((state) => state.tasks);
  console.log(todos);
  return (
    <ul className="todo-group">
      {todos.map(({ task, id }) => (
        <TodoItem title={task} id={id} key={id.toString()} />
      ))}
    </ul>
  );
}

export default Todos;
