import React from 'react'
import TodosContainer from '../containers/todos/TodosContainer'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function TodoListPage() {
  return (
    <div>
      <HeaderContainer />
      <div style={styles.container}>
        <SideBar />
        <TodosContainer />
      </div>
    </div>
  )
}

export default TodoListPage
