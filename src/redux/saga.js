import {all} from 'redux-saga/effects';
export function* theme() {
  console.log('saga connected');
}
export default function* rootSaga() {
  yield all([theme()]);
}
