import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Post } from '../post'
import { WriteState } from './types'

const initialState: WriteState = {
  post: null,
  postError: null,
  postForEdit: null,
  originalPostId: null,
}

const slice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    initialize() {
      return initialState
    },
    setOriginalPost(state, { payload: post }: PayloadAction<Post>) {
      state.postForEdit = {
        title: post.title,
        content: post.content,
        tags: post.tags,
      }
      state.originalPostId = post.id
    },
    writePost(state) {
      state.post = null
      state.postError = null
    },
    writePostSuccess(state, { payload: post }: PayloadAction<Post>) {
      state.post = post
    },
    writePostFailure(state, { payload: error }: PayloadAction<AxiosError>) {
      state.postError = error
    },
    updatePost() {},
    updatePostSuccess(state, { payload: post }: PayloadAction<Post>) {
      state.post = post
    },
    updatePostFailure(state, { payload: error }: PayloadAction<AxiosError>) {
      state.postError = error
    },
  },
})

export const WRITE = slice.name
export const {
  initialize,
  setOriginalPost,
  writePost,
  writePostSuccess,
  writePostFailure,
  updatePost,
  updatePostSuccess,
  updatePostFailure,
} = slice.actions
export default slice.reducer
