import React from 'react'

function getStyles(color: string | undefined, fullWidth: boolean, styles: React.CSSProperties) {
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color?: string
  fullWidth?: boolean
  styles?: React.CSSProperties
  disable?: React.ButtonHTMLAttributes<HTMLButtonElement>['disabled']
}
function Button({
  type,
  label,
  color,
  fullWidth = false,
  onClick,
  styles = {},
  disable,
}: ButtonProps) {
  const buttonStyle = getStyles(color, fullWidth, styles)
  return (
    <button type={type} style={buttonStyle} onClick={onClick} disabled={disable}>
      {label}
    </button>
  )
}

export default Button
