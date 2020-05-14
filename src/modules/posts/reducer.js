import constants from './constants'

const initialState = {
  postList: [],
  postDetail: null,
  processing: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.READ_ALL_POSTS_REQUEST:
    case constants.READ_POST_REQUEST:
    case constants.DOWNLOAD_POSTS_REQUEST:
      return { ...state, processing: true }
    case constants.READ_ALL_POSTS_SUCCESS:
      return { ...state, postList: payload, processing: false }
    case constants.READ_POST_SUCCESS:
      return { ...state, postDetail: payload, processing: false }
    case constants.DOWNLOAD_POSTS_SUCCESS:
      return { ...state, processing: false }
    case constants.READ_ALL_POSTS_FAILURE:
      return { ...state, processing: false }
    case constants.READ_POST_FAILURE:
      return { ...state, postDetail: null, processing: false }
    case constants.DOWNLOAD_POSTS_FAILURE:
      return { ...state, processing: false }
    case constants.CLEAR_POSTS_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer
