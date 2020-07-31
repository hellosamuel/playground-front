import { createAction, handleActions } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects'
import produce from 'immer'
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga'
import * as postsAPI from '../lib/api/posts'

const INITIALIZE = 'write/INITIALIZE'
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST'
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST')
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
] = createRequestActionTypes('write/UPDATE_POST')

export const initialize = createAction(INITIALIZE)
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post)
export const writePost = createAction(WRITE_POST, ({ key, value }) => ({
  key,
  value,
}))
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, content, tags }) => ({
    id,
    title,
    content,
    tags,
  })
)

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost)
const updatePostSaga = createRequestSaga(WRITE_POST, postsAPI.updatePost)
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga)
  yield takeLatest(UPDATE_POST, updatePostSaga)
}

const initialState = {
  title: '',
  content: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
}

const write = handleActions(
  {
    [INITIALIZE]: () => initialState,
    [SET_ORIGINAL_POST]: (state, { payload: post }) =>
      produce(state, draft => {
        draft.title = post.title
        draft.content = post.content
        draft.tags = post.tags
        draft.originalPostId = post.id
      }),
    [WRITE_POST]: state =>
      produce(state, draft => {
        draft.post = null
        draft.postError = null
      }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) =>
      produce(state, draft => {
        draft.post = post
      }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) =>
      produce(state, draft => {
        draft.postError = postError
      }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) =>
      produce(state, draft => {
        draft.post = post
      }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) =>
      produce(state, draft => {
        draft.postError = postError
      }),
  },
  initialState
)

export default write
