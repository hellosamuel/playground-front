import constants from './constants'

const actions = {
  read: {
    allPosts: {
      request(payload) {
        return {
          type: constants.READ_ALL_POSTS_REQUEST,
          payload,
        }
      },
      success(payload) {
        return {
          type: constants.READ_ALL_POSTS_SUCCESS,
          payload,
        }
      },
      failure(payload) {
        return {
          type: constants.READ_ALL_POSTS_FAILURE,
          payload,
        }
      },
    },
    post: {
      request(payload) {
        return {
          type: constants.READ_POST_REQUEST,
          payload,
        }
      },
      success(payload) {
        return {
          type: constants.READ_POST_SUCCESS,
          payload,
        }
      },
      failure() {
        return {
          type: constants.READ_POST_FAILURE,
        }
      },
    },
  },
  download: {
    request() {
      return {
        type: constants.DOWNLOAD_POSTS_REQUEST,
      }
    },
    success() {
      return {
        type: constants.DOWNLOAD_POSTS_SUCCESS,
      }
    },
    failure() {
      return {
        type: constants.DOWNLOAD_POSTS_FAILURE,
      }
    },
  },
  clear: {
    state() {
      return {
        type: constants.CLEAR_POSTS_STATE,
      }
    },
  },
}

export default actions
