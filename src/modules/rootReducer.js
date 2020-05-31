import { combineReducers } from 'redux'

import { reducer as postReducer } from './posts'
import todosReducer from './todos'

const rootReducer = combineReducers({
  posts: postReducer,
  todos: todosReducer,
})

export default rootReducer
