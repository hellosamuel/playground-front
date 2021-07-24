import { call, put, takeLatest } from 'redux-saga/effects'

import { finishLoading, startLoading } from '../loading'
import { check, checkSuccess, checkFailure, logout } from './slice'
import { UserCheckResponse } from './types'
import * as authAPI from '../../lib/api/auth'

function* checkSaga() {
  yield put(startLoading(check.type))

  try {
    const response: UserCheckResponse = yield call(authAPI.check)
    yield put(checkSuccess(response))
  } catch (err) {
    yield put(checkFailure(err))
  }

  yield put(finishLoading(check.type))
}

function checkFailureSaga() {
  try {
    localStorage.removeItem('user')
  } catch (e) {
    console.log('localStorage Error')
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout)
    localStorage.removeItem('user')
  } catch (e) {
    console.log(e)
  }
}

export default function* userSaga() {
  yield takeLatest(check.type, checkSaga)
  yield takeLatest(checkFailure.type, checkFailureSaga)
  yield takeLatest(logout.type, logoutSaga)
}
