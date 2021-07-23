import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { takeLatest } from 'redux-saga/effects'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga'
import * as authAPI from '../lib/api/auth'

const INITIALIZE = 'auth/INITIALIZE'
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER')
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN')
export const initialize = createAction(INITIALIZE)
export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}))
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}))

const registerSaga = createRequestSaga(REGISTER, authAPI.register)
const loginSaga = createRequestSaga(LOGIN, authAPI.login)
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga)
  yield takeLatest(LOGIN, loginSaga)
}

const initialState = {
  authRegister: null,
  authLogin: null,
  authError: null,
}
const auth = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [REGISTER_SUCCESS]: (state, { payload: authRegister }) =>
      produce(state, (draft) => {
        draft.authRegister = !!authRegister
        draft.authError = null
      }),
    [REGISTER_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.authError = error
      }),
    [LOGIN_SUCCESS]: (state, { payload: authLogin }) =>
      produce(state, (draft) => {
        draft.authLogin = authLogin
        draft.authError = null
      }),
    [LOGIN_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.authRegister = null
        draft.authError = error
      }),
  },
  initialState
)

export default auth
