import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = 'todo';

const initialState = {
  tasks: []
}

const todoSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        body: action.payload,
        isDone: false
      }

      state.tasks.push(newTask)
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { payload: { id, newValues } } = action;
      const taskIndex = state.tasks.findIndex(task => task.id === id);

      for (const [key, value] of Object.entries(newValues)) {
        state.tasks[taskIndex][key] = value;
      }
    }
  }
});

const { reducer: todoReducer, actions } = todoSlice;

export const { createTask, updateTask, deleteTask } = actions;

export default todoReducer;