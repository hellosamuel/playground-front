import constants from './constants'

const initialState = {
  postList: ['first', 'second', 'third'],
  post: null,
  processing: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.READ_ALL_POSTS_REQUEST:
    case constants.READ_POST_REQUEST:
      return { ...state, processing: true }
    case constants.READ_ALL_POSTS_SUCCESS:
      return { ...state, processing: false }
    case constants.READ_POST_SUCCESS:
      return { ...state, processing: false }
    case constants.READ_ALL_POSTS_FAILURE:
    case constants.READ_POST_FAILURE:
      return { ...state, processing: false }
    default:
      return state
  }
}

export default reducer
