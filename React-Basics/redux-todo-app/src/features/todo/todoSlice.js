import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState:[
      {title: 'todo1', done: false, id: 1},
      {title: 'todo2', done: false, id: 2},
      {title: 'todo3', done: false, id: 3},
  ],
  reducers: {
      saveTodo: (state, action)=>{
          const todoList = {
            title: action.payload.title,
            done: false,
            id: Date.now()  
        };
          state.push(todoList);
      }
  }
});

export const {saveTodo} = todoSlice.actions

export default todoSlice.reducer