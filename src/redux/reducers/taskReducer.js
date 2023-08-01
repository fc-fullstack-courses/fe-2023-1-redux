import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: [{
    id: 0,
    body: 'some text',
    isDone: false
  }]
}

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const newTask = {
        id: Date.now(),
        body: action.payload,
        isDone: false
      }

      return { ...state, tasks: [...state.tasks, newTask] }
    }
    case ACTION_TYPES.DELETE_TASK: {
      const newTasks = state.tasks.filter(task => task.id !== action.payload);

      return { ...state, tasks: newTasks }
    }
    case ACTION_TYPES.UPDATE_TASK: {
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