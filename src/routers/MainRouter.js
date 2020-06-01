import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import TodosContainer from '../containers/TodosContainer'
import PostsContainer from '../containers/PostsContainer'
import AlbumsListContainer from '../containers/Albums/AlbumsListContainer'
import AlbumsDetailContainer from '../containers/Albums/AlbumsDetailContainer'

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
        <Route path="/posts">
          <MainLayout component={PostsContainer} />
        </Route>
        <Route exact path="/albums">
          <MainLayout component={AlbumsListContainer} />
        </Route>
        <Route exact path="/albums/:albumId">
          <MainLayout component={AlbumsDetailContainer} />
        </Route>
        <Route path="/">
          <h2>Not Found 404</h2>
        </Route>
      </Switch>
    </>
  )
}

export default MainRouter
