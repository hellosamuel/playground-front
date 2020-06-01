import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from '../modules/loading'

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return function* (action) {
    yield put(startLoading(type))
    try {
      const { data } = yield call(request, action.payload)
      yield put({
        type: SUCCESS,
        payload: data,
      })
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
      })
    }
    yield put(finishLoading(type))
  }
}
