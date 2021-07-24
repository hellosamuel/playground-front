import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  PostsReadAllPostsPayload,
  PostsReadAllPostsResponse,
  PostsReadPostResponse,
  PostsState,
} from './types'

const initialState: PostsState = {
  posts: [],
  error: null,
  lastPage: 1,
  post: null,
}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    readAllPosts(state, action: PayloadAction<PostsReadAllPostsPayload>) {},
    readAllPostsSuccess(state, action: PayloadAction<PostsReadAllPostsResponse>) {
      state.posts = action.payload.data
      state.lastPage = parseInt(action.payload.headers['last-page'], 10)
    },
    readAllPostsFailure(state, action: PayloadAction<AxiosError>) {
      state.error = action.payload
    },
    readPost() {},
    readPostSuccess(state, action: PayloadAction<PostsReadPostResponse>) {
      state.post = action.payload.data
    },
    readPostFailure(state, action: PayloadAction<AxiosError>) {
      state.error = action.payload
    },
    downloadPosts() {},
    downloadPostsSuccess() {},
    downloadPostsFailure() {},
    clearPosts() {
      return initialState
    },
  },
})

export const POSTS = slice.name
export const {
  readAllPosts,
  readAllPostsSuccess,
  readAllPostsFailure,
  readPost,
  readPostSuccess,
  readPostFailure,
  downloadPosts,
  downloadPostsSuccess,
  downloadPostsFailure,
  clearPosts,
} = slice.actions
export default slice.reducer
