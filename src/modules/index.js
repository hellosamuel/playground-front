import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import loading from './loading'
import todos from './todos'
import auth, { authSaga } from './auth'
import user, { userSaga } from './user'
import { reducer as posts, sagas as postsSaga } from './posts'
import post, { postSaga } from './post'
import write, { writeSaga } from './write'

const rootReducer = combineReducers({
  loading,
  todos,
  auth,
  user,
  posts,
  post,
  write,
})

export function* rootSaga() {
  yield all([authSaga(), userSaga(), postsSaga(), postSaga(), writeSaga()])
}

export default rootReducer
