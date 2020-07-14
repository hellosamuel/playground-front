import { combineReducers } from 'redux'

import loading from './loading'
import todos from './todos'
import { reducer as posts } from './posts'

const rootReducer = combineReducers({
  loading,
  todos,
  posts,
})

export default rootReducer
