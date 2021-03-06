import { createAction, handleActions } from 'redux-actions'
import { takeLatest, call } from 'redux-saga/effects'
import * as authAPI from '../lib/api/auth'
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga'

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  'user/CHECK'
)
const LOGOUT = 'user/LOGOUT'

export const check = createAction(CHECK)
export const logout = createAction(LOGOUT)

const checkSaga = createRequestSaga(check, authAPI.check)
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
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga)
  yield takeLatest(CHECK_FAILURE, checkFailureSaga)
  yield takeLatest(LOGOUT, logoutSaga)
}

const initialState = {
  user: null,
  checkError: null,
}

export default handleActions(
  {
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: () => initialState,
  },
  initialState
)
