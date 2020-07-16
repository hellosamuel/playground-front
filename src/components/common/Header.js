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
}

function Header({ userInfo, onLogout }) {
  return (
    <div style={styles.container}>
      <div>
        <Link to="/" style={styles.title}>
          <h1>Playground</h1>
        </Link>
      </div>
      <div>
        {userInfo ? (
          <div>
            <span>{`Hello, ${userInfo.username}`}</span>
            <Button label="Logout" onClick={onLogout} />
          </div>
        ) : (
          <div>
            <Link to="/register">
              <Button label="Register" />
            </Link>
            <Link to="/login">
              <Button label="Login" />
            </Link>
          </div>
        )}
      </div>
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
