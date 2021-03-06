import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TodoListPage from './pages/TodoListPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PostPage from './pages/PostPage'
import PostListPage from './pages/PostListPage'
import WritePage from './pages/WritePage'

function App() {
  return (
    <Switch>
      <Route component={DashboardPage} exact path="/" />
      <Route component={TodoListPage} path="/todos" />
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={WritePage} path="/posts/write" />
      <Route component={PostPage} path="/posts/@:username/:postId" />
      <Route component={PostListPage} path={['/posts/@:username', '/posts']} />
      <Route path="/" render={() => <h2>Not Found 404</h2>} />
    </Switch>
  )
}

export default App
