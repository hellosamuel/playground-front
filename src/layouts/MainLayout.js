import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function MainMenu() {
  const activeStyle = {
    backgroundColor: 'yellow',
    textDecoration: 'none',
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/todos" activeStyle={activeStyle}>
          Todos
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts" activeStyle={activeStyle}>
          Posts
        </NavLink>
      </li>
    </ul>
  )
}

function MainLayout({ component: PassedComponent }) {
  return (
    <>
      <MainMenu />
      <PassedComponent />
    </>
  )
}

MainLayout.propTypes = {
  component: PropTypes.object,
}

MainLayout.defaultProps = {
  component: <h2>Something is wrong...</h2>,
}

export default MainLayout
