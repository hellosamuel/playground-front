import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import loading from './loading'
import todos from './todos'
import auth, { authSaga } from './auth'
import user, { userSaga } from './user'
import { reducer as posts, sagas as postsSaga } from './posts'
import post, { postSaga } from './post'

const rootReducer = combineReducers({
  loading,
  todos,
  auth,
  user,
  posts,
  post,
})

export function* rootSaga() {
  yield all([authSaga(), userSaga(), postsSaga(), postSaga()])
}

export default rootReducer
