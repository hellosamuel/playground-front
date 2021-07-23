import { createAction, handleActions } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga'
import * as postsAPI from '../lib/api/posts'
import { User } from './user'

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes('post/READ_POST')
const UNLOAD_POST = 'post/UNLOAD_POST'

export const readPost = createAction(READ_POST, (id) => id)
export const unloadPost = createAction(UNLOAD_POST)

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost)
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga)
}

export interface Post {
  id: number
  title: string
  content: string
  tags: string[]
  createdAt: string
  Author: User
}

const initialState = {
  post: null,
  error: false,
}

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: !!error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState
)

export default post
