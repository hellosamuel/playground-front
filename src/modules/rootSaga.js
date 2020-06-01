import { all } from 'redux-saga/effects'

import { sagas as postSaga } from './posts'
import { albumSaga } from './albums'

export default function* rootSaga() {
  yield all([postSaga(), albumSaga()])
}
