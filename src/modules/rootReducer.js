import { combineReducers } from 'redux'

import loading from './loading'
import todos from './todos'
import { reducer as posts } from './posts'
import albums from './albums'

const rootReducer = combineReducers({
  loading,
  todos,
  posts,
  albums,
})

export default rootReducer
