import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TodoListPage from './pages/TodoListPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PostListPage from './pages/PostListPage'

function App() {
  return (
    <Switch>
      <Route component={DashboardPage} exact path="/" />
      <Route component={TodoListPage} path="/todos" />
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={PostListPage} path="/posts" />
      <Route path="/" render={() => <h2>Not Found 404</h2>} />
    </Switch>
  )
}

export default App
