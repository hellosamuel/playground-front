import constants from './constants'

const actions = {
  read: {
    allPosts: {
      request() {
        return {
          type: constants.READ_ALL_POSTS_REQUEST,
        }
      },
      success(payload) {
        return {
          type: constants.READ_ALL_POSTS_SUCCESS,
          payload,
        }
      },
      failure() {
        return {
          type: constants.READ_ALL_POSTS_FAILURE,
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
}

export default actions
