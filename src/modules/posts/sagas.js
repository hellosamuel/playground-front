import { put, call, takeEvery } from 'redux-saga/effects'
import constants from './constants'
import actions from './actions'
import PostsApi from '../../api/posts'
import csvUtils from '../../utils/csvUtils'

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

  *download() {
    try {
      const { data } = yield call([PostsApi, PostsApi.getAllPosts])
      csvUtils.export(data, 'posts.csv')
      yield put(actions.download.success())
    } catch (error) {
      console.error(error)
      yield put(actions.download.failure())
    }
  },
}

function* postSaga() {
  yield takeEvery(constants.READ_ALL_POSTS_REQUEST, operations.getAllPosts)
  yield takeEvery(constants.READ_POST_REQUEST, operations.getPost)
  yield takeEvery(constants.DOWNLOAD_POSTS_REQUEST, operations.download)
}

export default postSaga
