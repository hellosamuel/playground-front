import React from 'react'
import TodosItem from './TodosItem'

function TodosList({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onChange = (e) => onChangeInput(e.currentTarget.value)
  const onSubmit = (e) => {
    e.preventDefault()
    onInsert(input)
    onChangeInput('')
  }

  return (
    <div>
      <h2>Todos Contents</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">Insert</button>
      </form>
      <div>
        {todos.length &&
          todos.map((item) => (
            <TodosItem key={item.id} todo={item} onToggle={onToggle} onRemove={onRemove} />
          ))}
      </div>
    </div>
  )
}

export default TodosList
