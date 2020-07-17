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
  menu: {
    fontSize: '1.5rem',
  },
  active: {
    backgroundColor: 'yellow',
    color: 'blue',
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
              style={styles.menu}
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
