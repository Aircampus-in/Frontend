import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        task: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      state[index].done = action.payload.done;
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
