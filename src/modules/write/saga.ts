import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'

import { finishLoading, startLoading } from '../loading'
import {
  writePost,
  writePostSuccess,
  writePostFailure,
  updatePost,
  updatePostSuccess,
  updatePostFailure,
} from './slice'
import { UpdatePostPayload, UpdatePostResponse, WritePostPayload, WritePostResponse } from './types'
import * as postsAPI from '../../lib/api/posts'

function* writePostSaga(action: PayloadAction<WritePostPayload>) {
  yield put(startLoading(writePost.type))

  try {
    const response: WritePostResponse = yield call(postsAPI.writePost, action.payload)
    yield put(writePostSuccess(response.data))
  } catch (err) {
    yield put(writePostFailure(err))
  }

  yield put(finishLoading(writePost.type))
}

function* updatePostSaga(action: PayloadAction<UpdatePostPayload>) {
  yield put(startLoading(updatePost.type))

  try {
    const response: UpdatePostResponse = yield call(postsAPI.updatePost, action.payload)
    yield put(updatePostSuccess(response.data))
  } catch (err) {
    yield put(updatePostFailure(err))
  }

  yield put(finishLoading(updatePost.type))
}

export default function* writeSaga() {
  yield takeLatest(writePost.type, writePostSaga)
  yield takeLatest(updatePost.type, updatePostSaga)
}
