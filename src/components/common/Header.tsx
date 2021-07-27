import React from 'react'
import { Link } from 'react-router-dom'
import { UserState } from '../../modules/user'
import Button from './Button'

const styles = {
  title: {
    textDecoration: 'none',
    color: 'black',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  buttonWithMarginTop: {
    marginTop: '1rem',
  },
}

interface HeaderProps {
  userInfo: UserState['user']
  onLogout: () => void
}
function Header({ userInfo, onLogout }: HeaderProps) {
  return (
    <div style={styles.container}>
      <div>
        <Link to="/" style={styles.title}>
          <h1>Playground</h1>
        </Link>
      </div>
      {userInfo ? (
        <div style={styles.buttonWithMarginTop}>
          <span>{`Hello, ${userInfo.username}`}</span>
          <Button label="Logout" onClick={onLogout} styles={{ marginLeft: '1rem' }} />
        </div>
      ) : (
        <div style={styles.buttonWithMarginTop}>
          <Link to="/register">
            <Button label="Register" />
          </Link>
          <Link to="/login">
            <Button label="Login" />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header
