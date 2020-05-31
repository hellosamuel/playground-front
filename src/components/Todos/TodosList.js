import React from 'react'
import PropTypes from 'prop-types'
import TodosItem from './TodosItem'

function TodosList({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) {
  const onChange = e => onChangeInput(e.currentTarget.value)
  const onSubmit = e => {
    e.preventDefault()
    onInsert(input)
    onChangeInput('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">Insert</button>
      </form>
      <div>
        {todos.length &&
          todos.map(item => (
            <TodosItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
      </div>
    </div>
  )
}

TodosList.propTypes = {
  input: PropTypes.string,
  todos: PropTypes.array,
  onChangeInput: PropTypes.func.isRequired,
  onInsert: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

TodosList.defaultProps = {
  input: '',
  todos: [],
}

export default TodosList
