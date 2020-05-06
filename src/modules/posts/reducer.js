import constants from './constants'

const initialState = {
  // postList: [],
  postList: ['first', 'second', 'third'],
  post: null,
  processing: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.READ_ALL_POSTS_REQUEST:
    case constants.READ_POST_REQUEST:
      return { processing: true }
    case constants.READ_ALL_POSTS_SUCCESS:
      return { postList: payload, processing: false }
    case constants.READ_POST_SUCCESS:
      return { post: payload, processing: false }
    case constants.READ_ALL_POSTS_FAILURE:
    case constants.READ_POST_FAILURE:
      return { processing: false }
    default:
      return state
  }
}

export default reducer
