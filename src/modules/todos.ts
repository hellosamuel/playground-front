import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const changeInput = createAction(CHANGE_INPUT, (input) => input)

let newId = 3
export const insert = createAction(INSERT, (text) => {
  const newTodo = { id: newId, text, done: false }
  newId += 1
  return newTodo
})

export const toggle = createAction(TOGGLE, (id) => id)
export const remove = createAction(REMOVE, (id) => id)

export interface Todo {
  id: number
  text: string
  done: boolean
}
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'First Todo Item',
      done: false,
    },
    {
      id: 2,
      text: 'Second Todo Item',
      done: true,
    },
  ],
}

const todosReducer = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo)
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((item) => item.id === id)
        todo.done = !todo.done
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((item) => item.id === id)
        draft.todos.splice(index, 1)
      }),
  },
  initialState
)

export default todosReducer
