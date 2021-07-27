import { PayloadAction } from '@reduxjs/toolkit'
import { put, call, takeEvery, select } from 'redux-saga/effects'

import { startLoading, finishLoading } from '../loading'
import {
  readAllPosts,
  readAllPostsSuccess,
  readAllPostsFailure,
  readPost,
  readPostSuccess,
  readPostFailure,
  downloadPosts,
  downloadPostsSuccess,
  downloadPostsFailure,
} from './slice'
import { PostsReadAllPostsPayload, PostsReadAllPostsResponse, PostsReadPostResponse } from './types'
import * as postsAPI from '../../lib/api/posts'
import csvUtils from '../../lib/csvUtils'
import { Post } from '../post'

function* getAllPostsSaga(action: PayloadAction<PostsReadAllPostsPayload>) {
  yield put(startLoading(readAllPosts.type))

  try {
    const response: PostsReadAllPostsResponse = yield call(postsAPI.listPosts, action.payload)
    yield put(readAllPostsSuccess(response))
  } catch (err) {
    yield put(readAllPostsFailure(err))
  }

  yield put(finishLoading(readAllPosts.type))
}

function* getPostSaga(action: PayloadAction<string>) {
  yield put(startLoading(readPost.type))

  try {
    const response: PostsReadPostResponse = yield call(postsAPI.readPost, action.payload)
    yield put(readPostSuccess(response))
  } catch (err) {
    yield put(readPostFailure(err))
  }

  yield put(finishLoading(readPost.type))
}

function* downloadPostsSaga() {
  yield put(startLoading(downloadPosts.type))

  try {
    const data: Post[] = yield select(({ posts }) => posts.posts)
    const exportData = data.map((row) => {
      const post = {
        ...row,
        author: row.Author?.username,
      }
      delete post.userId
      delete post.Author

      return post
    })
    csvUtils.export(exportData, 'posts.csv')
    yield put(downloadPostsSuccess())
  } catch (err) {
    console.error(err)
    yield put(downloadPostsFailure())
  }

  yield put(finishLoading(downloadPosts.type))
}

export default function* postSaga() {
  yield takeEvery(readAllPosts.type, getAllPostsSaga)
  yield takeEvery(readPost.type, getPostSaga)
  yield takeEvery(downloadPosts.type, downloadPostsSaga)
}
