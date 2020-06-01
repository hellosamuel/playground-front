import { combineReducers } from 'redux'

import { reducer as postsReducer } from './posts'
import todosReducer from './todos'

const rootReducer = combineReducers({
  posts: postsReducer,
  todos: todosReducer,
})

export default rootReducer
