import { all, fork } from 'redux-saga/effects'

import { sagas as postSagas } from './posts'

const allSagas = [...postSagas]

export default function* rootSaga() {
  yield all(allSagas.map(saga => fork(saga)))
}
