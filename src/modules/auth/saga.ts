import { takeLatest, call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { startLoading, finishLoading } from '../loading'
import {
  register,
  registerSuccess,
  registerFailure,
  login,
  loginSuccess,
  loginFailure,
} from './slice'
import {
  AuthLoginPayload,
  AuthLoginResponse,
  AuthRegisterPayload,
  AuthRegisterResponse,
} from './types'
import * as authAPI from '../../lib/api/auth'

function* registerSaga(action: PayloadAction<AuthRegisterPayload>) {
  yield put(startLoading(register.type))

  try {
    const response: AuthRegisterResponse = yield call(authAPI.register, action.payload)
    yield put(registerSuccess(response))
  } catch (err) {
    yield put(registerFailure(err))
  }

  yield put(finishLoading(register.type))
}

function* loginSaga(action: PayloadAction<AuthLoginPayload>) {
  yield put(startLoading(login.type))

  try {
    const response: AuthLoginResponse = yield call(authAPI.login, action.payload)
    yield put(loginSuccess(response))
  } catch (err) {
    yield put(loginFailure(err))
  }

  yield put(finishLoading(login.type))
}

export default function* authSaga() {
  yield takeLatest(register.type, registerSaga)
  yield takeLatest(login.type, loginSaga)
}
