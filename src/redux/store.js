import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
// import rootSaga from './sagas';

// const sagaMW = createSagaMiddleware();

// const enchancer = applyMiddleware(sagaMW);

// const store = createStore(rootReducer, composeWithDevTools(enchancer));

const store = configureStore({
  reducer: rootReducer
});

// sagaMW.run(rootSaga);

export default store;