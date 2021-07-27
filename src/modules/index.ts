import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import loading, { LOADING } from './loading'
import todos, { TODOS } from './todos'
import auth, { AUTH, authSaga } from './auth'
import user, { USER, userSaga } from './user'
import posts, { POSTS, postsSaga } from './posts'
import post, { POST, postSaga } from './post'
import write, { WRITE, writeSaga } from './write'

export const rootReducer = combineReducers({
  [LOADING]: loading,
  [TODOS]: todos,
  [AUTH]: auth,
  [USER]: user,
  [POSTS]: posts,
  [POST]: post,
  [WRITE]: write,
})

function* rootSaga() {
  yield all([authSaga(), userSaga(), postsSaga(), postSaga(), writeSaga()])
}

const devMode = process.env.NODE_ENV === 'development'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: devMode,
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
