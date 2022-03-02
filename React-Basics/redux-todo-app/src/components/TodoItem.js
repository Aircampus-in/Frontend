import React from "react";
import { deleteTask, toggleComplete } from "../features/tasksSlice";
import { useDispatch } from "react-redux";

function TodoItem(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteTask({
        id: props.id,
      })
    );
  };

  const handleDone = () => {
    dispatch(
      toggleComplete({
        id: props.id,
        done: !props.done,
      })
    );
  };
  return (
    <div className="todo-item">
      <p className={props.done ? "done" : "not-done"}>{props.title}</p>
      <div className="todo-function">
        <p onClick={handleDone}>
          <i className="fas fa-check check"></i>
        </p>
        <p onClick={handleDelete}>
          <i className="fas fa-trash-alt delete"></i>
        </p>
      </div>
    </div>
  );
}

export default TodoItem;
