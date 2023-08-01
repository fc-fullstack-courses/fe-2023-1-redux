import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  task: taskReducer
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
  }
}

export default rootReducer;