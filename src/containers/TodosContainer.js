import React from 'react'
import { useSelector } from 'react-redux'
import TodosList from '../components/Todos/TodosList'
import { changeInput, insert, toggle, remove } from '../modules/todos'
import useActions from '../utils/useActions'

function TodosContainer() {
  const { input, todos } = useSelector(store => ({
    input: store.todos.input,
    todos: store.todos.todos,
  }))

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  )

  return (
    <TodosList
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  )
}

export default React.memo(TodosContainer)
