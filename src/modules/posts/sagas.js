import { put, takeEvery } from 'redux-saga/effects'
import constants from './constants'
import actions from './actions'

const operations = {
  *getAllPosts() {
    try {
      console.log('getAllPosts')
      yield put(actions.read.allPosts.success())
    } catch (error) {
      console.error(error)
      yield put(actions.read.allPosts.failure())
    }
  },
  *getPost() {
    try {
      console.log('getPost')
      yield put(actions.read.post.success())
    } catch (error) {
      console.error(error)
      yield put(actions.read.post.failure())
    }
  },
}

function* postWatcher() {
  yield takeEvery(constants.READ_ALL_POSTS_REQUEST, operations.getAllPosts)
  yield takeEvery(constants.READ_POST_REQUEST, operations.getPost)
}

export default [postWatcher]
