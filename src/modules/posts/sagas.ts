import { put, call, takeEvery, select } from 'redux-saga/effects'
import constants from './constants'
import actions from './actions'
import * as postsAPI from '../../lib/api/posts'
import csvUtils from '../../lib/csvUtils'

const operations = {
  *getAllPosts({ payload: { username, tag, page } }) {
    try {
      const response = yield call(postsAPI.listPosts, { username, tag, page })
      yield put(
        actions.read.allPosts.success({
          data: response.data,
          lastPage: parseInt(response.headers['last-page'], 10),
        })
      )
    } catch (error) {
      console.error(error)
      yield put(actions.read.allPosts.failure({ meta: error, res: error.response }))
    }
  },

  *getPost({ payload: postId }) {
    try {
      const { data } = yield call(postsAPI.readPost, postId)
      yield put(actions.read.post.success(data))
    } catch (error) {
      console.error(error)
      yield put(actions.read.post.failure())
    }
  },

  *download() {
    try {
      const data = yield select(({ posts }) => posts.posts)
      const exportData = data.map((row) => {
        const post = {
          ...row,
          author: row.Author.username,
        }
        delete post.userId
        delete post.Author

        return post
      })
      csvUtils.export(exportData, 'posts.csv')
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
