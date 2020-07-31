import React from 'react'
import PropTypes from 'prop-types'

function getStyles(color, fullWidth, styles) {
  return {
    // marginRight: '1rem',
    marginLeft: '1rem',
    padding: '0.25rem 1rem',
    fontSize: '1rem',
    outline: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ...styles,
    backgroundColor: color,
    ...(fullWidth ? { width: '100%', height: '4rem' } : {}),
  }
}

function Button({ type, label, color, fullWidth, onClick, styles }) {
  const buttonStyle = getStyles(color, fullWidth, styles)
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
  styles: PropTypes.object,
}

Button.defaultProps = {
  type: 'button',
  color: 'lightgray',
  fullWidth: false,
  onClick: () => {},
  styles: {},
}

export default Button
