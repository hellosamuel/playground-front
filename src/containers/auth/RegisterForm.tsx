import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../modules/auth'
import AuthForm from '../../components/auth/AuthForm'

function RegisterForm() {
  const dispatch = useDispatch()
  const { authRegister, authError } = useSelector(({ auth }) => ({
    authRegister: auth.authRegister,
    authError: auth.authError,
  }))

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  })
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setRegisterForm({ ...registerForm, [name]: value.trim() })
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { username, password, passwordConfirm } = registerForm
    if ([username, password, passwordConfirm].includes('')) {
      setError('All fields are required')
      return
    }

    if (password !== passwordConfirm) {
      setError('Password is not same')
      return
    }

    dispatch(register({ username, password }))
  }

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError(authError.response.data)
        return
      }

      setError('Failed to register')
    }
  }, [authError])

  if (authRegister) {
    return <Redirect to="/login" />
  }

  return (
    <AuthForm
      type="register"
      form={registerForm}
      handleChange={handleChange}
      onSubmit={onSubmit}
      error={error}
    />
  )
}

export default RegisterForm
