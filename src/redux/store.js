import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import todoReducer from './slices/todoSlice';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from '@redux-devtools/extension';

// import rootSaga from './sagas';

// const sagaMW = createSagaMiddleware();

// const enchancer = applyMiddleware(sagaMW);

// const store = createStore(rootReducer, composeWithDevTools(enchancer));

const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: todoReducer,
    user: userReducer
  }
});

// sagaMW.run(rootSaga);

export default store;