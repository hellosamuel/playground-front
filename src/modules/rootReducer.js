import { combineReducers } from 'redux'

import { reducer as postReducer } from './posts'

const rootReducer = combineReducers({
  posts: postReducer,
})

export default rootReducer
