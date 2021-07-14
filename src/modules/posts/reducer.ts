import constants from './constants'

const initialState = {
  posts: [],
  error: null,
  lastPage: 1,
  loading: false,
  post: null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.READ_ALL_POSTS_REQUEST:
    case constants.READ_POST_REQUEST:
    case constants.DOWNLOAD_POSTS_REQUEST:
      return { ...state, loading: true }
    case constants.READ_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload.data,
        lastPage: payload.lastPage,
        loading: false,
      }
    case constants.READ_POST_SUCCESS:
      return { ...state, post: payload, loading: false }
    case constants.DOWNLOAD_POSTS_SUCCESS:
      return { ...state, loading: false }
    case constants.READ_ALL_POSTS_FAILURE:
      return { ...state, error: payload, loading: false }
    case constants.READ_POST_FAILURE:
      return { ...state, post: null, loading: false }
    case constants.DOWNLOAD_POSTS_FAILURE:
      return { ...state, loading: false }
    case constants.CLEAR_POSTS_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer
