import { all } from 'redux-saga/effects'

import { sagas as postSaga } from './posts'

export default function* rootSaga() {
  yield all([postSaga()])
}
