import * as ActionCreators from '../actions/actionCreators';

const initialState = {
  tasks: []
}

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ActionCreators.createTask.type: {
      const newTask = {
        id: Date.now(),
        body: action.payload,
        isDone: false
      }

      return { ...state, tasks: [...state.tasks, newTask] }
    }
    case ActionCreators.deleteTask.type: {
      const newTasks = state.tasks.filter(task => task.id !== action.payload);

      return { ...state, tasks: newTasks }
    }
    case ActionCreators.updateTask.type: {
      const { payload: { id, newValues } } = action;

      const newTasks = state.tasks.map(task => {
        if (task.id !== id) {
          return task;
        }

        return {
          ...task,
          ...newValues
        }
      });

      return { ...state, tasks: newTasks }
    }
    default: return state;
  }
}

export default taskReducer;