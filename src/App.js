import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import PostList from './components/Posts/PostList'

const activeStyle = {
  backgroundColor: 'yellow',
  textDecoration: 'none',
}

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>
            Posts
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h2>Dashboard Contents</h2>
        </Route>
        <Route path="/posts">
          <PostList />
        </Route>
        <Route path="/">Not Found 404</Route>
      </Switch>
    </div>
  )
}

export default App
