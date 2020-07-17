import React from 'react'
import TodosContainer from '../containers/todos/TodosContainer'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'

function TodoListPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <TodosContainer />
      </ContentTemplate>
    </>
  )
}

export default TodoListPage
