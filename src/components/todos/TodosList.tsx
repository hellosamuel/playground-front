import React from 'react'
import { Todo } from '../../modules/todos'
import TodosItem from './TodosItem'

interface TodosListProps {
  input: string
  todos: Todo[]
  onChangeInput: (input: string) => void
  onInsert: (text: string) => void
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}
function TodosList({ input, todos, onChangeInput, onInsert, onToggle, onRemove }: TodosListProps) {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => onChangeInput(e.currentTarget.value)
  const onSubmit = (e: React.SyntheticEvent) => {
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
