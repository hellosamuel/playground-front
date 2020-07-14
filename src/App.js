import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import TodoListPage from './pages/TodoListPage'
import PostListPage from './pages/PostListPage'

const TitleStyle = {
  textDecoration: 'none',
  color: 'black',
}

function App() {
  return (
    <>
      <Link to="/" style={TitleStyle}>
        <h1>Playground</h1>
      </Link>

      <Switch>
        <Route component={DashboardPage} exact path="/" />
        <Route component={TodoListPage} path="/todos" />
        <Route component={PostListPage} path="/posts" />
        <Route path="/" render={() => <h2>Not Found 404</h2>} />
      </Switch>
    </>
  )
}

export default App
