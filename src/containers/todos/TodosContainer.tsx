import React from 'react'
import TodosList from '../../components/todos/TodosList'
import { changeInput, insert, toggle, remove } from '../../modules/todos'
import useActions from '../../lib/useActions'
import { useAppSelector } from '../../hooks/hooks'

function TodosContainer() {
  const { input, todos } = useAppSelector((store) => ({
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
