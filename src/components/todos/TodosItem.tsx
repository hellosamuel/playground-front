import React from 'react'

function TodosItem({ todo, onToggle, onRemove }) {
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
