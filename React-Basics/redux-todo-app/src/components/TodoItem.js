import React from "react";
import { deleteTask } from "../features/tasksSlice";
import { useDispatch } from "react-redux";

function TodoItem(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      deleteTask({
        id: props.id,
      })
    );
  };
  return (
    <div className="todo-item">
      <p>{props.title}</p>
      <p onClick={handleClick}>
        <i className="fas fa-trash-alt delete"></i>
      </p>
    </div>
  );
}

export default TodoItem;
