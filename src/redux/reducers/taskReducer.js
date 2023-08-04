import { createReducer } from '@reduxjs/toolkit';
import * as ActionCreators from '../actions/actionCreators';

const initialState = {
  tasks: []
}

const taskReducer = createReducer(initialState, function (builder) {

  builder.addCase(ActionCreators.createTask.type, (state, action) => {
    const newTask = {
      id: Date.now(),
      body: action.payload,
      isDone: false
    }

    state.tasks.push(newTask);
    // state.id = 245;
  });

  builder.addCase(ActionCreators.deleteTask, (state, action) => {
    state.tasks = state.tasks.filter(task => task.id !== action.payload);
  });

  builder.addCase(ActionCreators.updateTask, (state, { payload: { id, newValues } }) => {
    const taskIndex = state.tasks.findIndex(task => task.id === id);

    for(const [key, value] of Object.entries(newValues)) {
      state.tasks[taskIndex][key] = value;
    }
  });
});

// function taskReducer(state = initialState, action) {
//   switch (action.type) {
//     case ActionCreators.createTask.type: {
//       const newTask = {
//         id: Date.now(),
//         body: action.payload,
//         isDone: false
//       }

//       return { ...state, tasks: [...state.tasks, newTask] }
//     }
//     case ActionCreators.deleteTask.type: {
//       const newTasks = state.tasks.filter(task => task.id !== action.payload);

//       return { ...state, tasks: newTasks }
//     }
//     case ActionCreators.updateTask.type: {
//       const { payload: { id, newValues } } = action;

//       const newTasks = state.tasks.map(task => {
//         if (task.id !== id) {
//           return task;
//         }

//         return {
//           ...task,
//           ...newValues
//         }
//       });

//       return { ...state, tasks: newTasks }
//     }
//     default: return state;
//   }
// }

export default taskReducer;