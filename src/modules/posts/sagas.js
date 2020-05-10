import { put, call, takeEvery } from 'redux-saga/effects'
import constants from './constants'
import actions from './actions'
import PostsApi from '../../api/posts'

const operations = {
  *getAllPosts() {
    try {
      const { data } = yield call([PostsApi, PostsApi.getAllPosts])
      yield put(actions.read.allPosts.success(data))
    } catch (error) {
      console.error(error)
      yield put(actions.read.allPosts.failure())
    }
  },

  *getPost({ payload: postId }) {
    try {
      const { data } = yield call([PostsApi, PostsApi.getPost], postId)
      yield put(actions.read.post.success(data))
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
