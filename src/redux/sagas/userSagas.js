import { put } from 'redux-saga/effects'
import * as API from '../../api';
import * as UserActionCreators from '../actions/userActionCreators';

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);
    const { data: { data: user } } = response;

    yield put(UserActionCreators.createUserSuccess(user))
  } catch (error) {
    yield put(UserActionCreators.createUserError(error))
  }
}