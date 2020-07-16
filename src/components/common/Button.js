import React from 'react'
import PropTypes from 'prop-types'

function getStyles(color, fullWidth) {
  return {
    margin: '10px',
    padding: '0.25rem 1rem',
    fontSize: '1rem',
    outline: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: color,
    ...(fullWidth ? { width: '100%', height: '4rem' } : {}),
  }
}

function Button({ type, label, color, fullWidth, onClick }) {
  const buttonStyle = getStyles(color, fullWidth)
  return (
    <button type={type} style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  color: 'lightgray',
  fullWidth: false,
  onClick: () => {},
}

export default Button
