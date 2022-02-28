import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { saveTodo } from '../features/todo/todoSlice';

function Input() {
    const[value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(saveTodo({
            title: value,
        }));
        // console.log(saveTodo);
    }

  return (
    <div>
        <form className="form-field" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <button  className="add">Add Task</button>
        </form>
    </div>
  )
}

export default Input