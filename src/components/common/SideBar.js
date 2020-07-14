import React from 'react'
import { NavLink } from 'react-router-dom'

const sideMenu = [
  {
    isExact: true,
    to: '/',
    label: 'Dashboard',
  },
  {
    isExact: false,
    to: '/todos',
    label: 'Todos',
  },
  {
    isExact: false,
    to: '/posts',
    label: 'Posts',
  },
]

const styles = {
  active: {
    backgroundColor: 'yellow',
    textDecoration: 'none',
  },
}

function SideBar() {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {sideMenu.map(menu => (
          <li key={menu.to}>
            <NavLink
              exact={menu.isExact}
              to={menu.to}
              activeStyle={styles.active}
            >
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
