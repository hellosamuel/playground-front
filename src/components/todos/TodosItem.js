import React from 'react'
import PropTypes from 'prop-types'

function TodosItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => onToggle(todo.id)}
        readOnly
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button type="button" onClick={() => onRemove(todo.id)}>
        Remove
      </button>
    </div>
  )
}

TodosItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodosItem
