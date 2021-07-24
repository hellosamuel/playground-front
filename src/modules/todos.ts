import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: number
  text: string
  done: boolean
}

interface TodosState {
  input: string
  todos: Todo[]
}
const initialState: TodosState = {
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

let newId = 3
const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload
    },
    insert: {
      reducer(state, action: PayloadAction<Todo>) {
        state.todos.push(action.payload)
      },
      prepare(text) {
        const newTodo = { id: newId, text, done: false }
        newId += 1
        return { payload: newTodo }
      },
    },
    toggle(state, { payload: id }: PayloadAction<number>) {
      const todo = state.todos.find((item) => item.id === id)
      if (todo) {
        todo.done = !todo.done
      }
    },
    remove(state, { payload: id }: PayloadAction<number>) {
      const index = state.todos.findIndex((item) => item.id === id)
      state.todos.splice(index, 1)
    },
  },
})

export const TODOS = slice.name
export const { changeInput, insert, toggle, remove } = slice.actions
export default slice.reducer
