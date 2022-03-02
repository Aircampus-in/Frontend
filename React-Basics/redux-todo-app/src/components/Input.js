import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

const Input = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

  return (
    <div>
        <form className="form-field" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button  className="add">Add Task</button>
        </form>
    </div>
  )
}

export default Input