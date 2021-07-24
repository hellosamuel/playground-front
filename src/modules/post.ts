import { call, put, takeLatest } from 'redux-saga/effects'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError, AxiosResponse } from 'axios'
import { startLoading, finishLoading } from './loading'
import * as postsAPI from '../lib/api/posts'
import { User } from './user'

export interface Post {
  id: number
  title: string
  content: string
  tags: string[]
  createdAt: string
  userId?: number
  Author?: User
}

type PostReadPostResponse = AxiosResponse<Post>

interface PostState {
  post: Post | null
  error: AxiosError | null
}

const initialState: PostState = {
  post: null,
  error: null,
}

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    readPost() {},
    readPostSuccess(state, action: PayloadAction<PostReadPostResponse>) {
      state.post = action.payload.data
    },
    readPostFailure(state, action: PayloadAction<AxiosError>) {
      state.error = action.payload
    },
    unloadPost() {
      return initialState
    },
  },
})

export const POST = slice.name
export const { readPost, readPostSuccess, readPostFailure, unloadPost } = slice.actions
export default slice.reducer

function* readPostSaga(action: PayloadAction<number>) {
  yield put(startLoading(readPost.type))

  try {
    const response: PostReadPostResponse = yield call(postsAPI.readPost, action.payload)
    yield put(readPostSuccess(response))
  } catch (err) {
    yield put(readPostFailure(err))
  }

  yield put(finishLoading(readPost.type))
}

export function* postSaga() {
  yield takeLatest(readPost.type, readPostSaga)
}
