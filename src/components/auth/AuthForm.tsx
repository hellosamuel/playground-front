import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const styles: {
  [name: string]: React.CSSProperties
} = {
  root: {
    width: '480px',
  },
  input: {
    marginTop: '2rem',
    paddingBottom: '0.5rem',
    border: 'none',
    borderBottom: '1px solid gray',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'right',
    color: 'blue',
    textDecoration: 'underline',
  },
  messageBox: {
    textAlign: 'center',
    fontSize: '0.875rem',
    marginTop: '1rem',
  },
}

interface AuthFormProps {
  type: 'login' | 'register'
  form: {
    username: string
    password: string
    passwordConfirm?: string
  }
  handleChange: () => void
  onSubmit: () => void
  error: string | null
  authRegister: boolean
}

function AuthForm({ type, form, handleChange, onSubmit, error, authRegister }: AuthFormProps) {
  const [isRegister, title] = type === 'register' ? [true, 'Register'] : [false, 'Login']

  return (
    <div style={styles.root}>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        <input
          style={styles.input}
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
        />
        {isRegister && (
          <input
            style={styles.input}
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            onChange={handleChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <div style={{ ...styles.messageBox, color: 'red' }}>{error}</div>}
        {authRegister && (
          <div style={{ ...styles.messageBox, color: 'blue' }}>Thank you for join us!</div>
        )}
        <Button
          type="submit"
          label={title}
          color="orange"
          fullWidth
          styles={{ marginTop: '2rem' }}
        />
      </form>
      <div style={styles.footer}>
        {isRegister ? <Link to="/login">Login</Link> : <Link to="/register">Register</Link>}
      </div>
    </div>
  )
}

export default AuthForm
