import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const styles = {
  title: {
    textDecoration: 'none',
    color: 'black',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonWithMarginTop: {
    marginTop: '1rem',
  },
}

function Header({ userInfo, onLogout }) {
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
          <Button
            label="Logout"
            onClick={onLogout}
            styles={{ marginLeft: '1rem' }}
          />
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

Header.propTypes = {
  userInfo: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
}

Header.defaultProps = {
  userInfo: {},
}

export default Header
