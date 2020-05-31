import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import PostList from '../components/Posts/PostList'
import TodosContainer from '../containers/TodosContainer'

const TitleStyle = {
  textDecoration: 'none',
  color: 'black',
}

function MainRouter() {
  return (
    <>
      <Link to="/" style={TitleStyle}>
        <h1>Playground</h1>
      </Link>
      <Switch>
        <Route exact path="/">
          <MainLayout component={() => <h2>DashBoard Contents</h2>} />
        </Route>
        <Route path="/todos">
          <MainLayout component={TodosContainer} />
        </Route>
        <Route path="/posts" component={PostList} />
        <Route path="/">
          <h2>Not Found 404</h2>
        </Route>
      </Switch>
    </>
  )
}

export default MainRouter
