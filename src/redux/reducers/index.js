import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  task: taskReducer,
  user: userReducer
});

const oldState = {
  counter: 1,
  step: 1
}

const newState = {
  counter: {
    counter: 1,
    step: 1
  },
  task : {
    tasks: [],
    counter: 500
  },
  user: {
    users: [],
    isLoading: false,
    error: null
  }
}

export default rootReducer;