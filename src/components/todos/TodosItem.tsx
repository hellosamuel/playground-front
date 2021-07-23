import React from 'react'
import { Todo } from '../../modules/todos'

interface TodosItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}
function TodosItem({ todo, onToggle, onRemove }: TodosItemProps) {
  return (
    <div>
      <input type="checkbox" checked={todo.done} onClick={() => onToggle(todo.id)} readOnly />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button type="button" onClick={() => onRemove(todo.id)}>
        Remove
      </button>
    </div>
  )
}

export default TodosItem
