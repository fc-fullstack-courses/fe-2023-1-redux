import { legacy_createStore as createStore } from 'redux';
import reducer from './reducers/counterReducer';

const store = createStore(reducer);

export default store;