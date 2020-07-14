import React from 'react'
import TodosContainer from '../containers/TodosContainer'
import SideBar from '../components/common/SideBar'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function TodoListPage() {
  return (
    <div style={styles.container}>
      <SideBar />
      <TodosContainer />
    </div>
  )
}

export default TodoListPage
