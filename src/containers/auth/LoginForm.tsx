import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { initialize, login } from '../../modules/auth/slice'
import { check } from '../../modules/user/slice'
import AuthForm from '../../components/auth/AuthForm'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

function LoginForm({ history }: { history: RouteComponentProps['history'] }) {
  const dispatch = useAppDispatch()
  const { authLogin, authRegister, authError, userInfo } = useAppSelector(({ auth, user }) => ({
    authLogin: auth.authLogin,
    authRegister: auth.authRegister,
    authError: auth.authError,
    userInfo: user.user,
  }))

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setLoginForm({ ...loginForm, [name]: value })
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { username, password } = loginForm
    dispatch(login({ username, password }))
  }

  useEffect(
    () => () => {
      dispatch(initialize())
    },
    [dispatch]
  )

  useEffect(() => {
    if (authError) {
      setError(authError.response?.data)
      return
    }

    if (authLogin) {
      dispatch(check())
    }
  }, [authLogin, authError, dispatch])

  useEffect(() => {
    if (userInfo) {
      history.push('/')
      try {
        localStorage.setItem('user', JSON.stringify(userInfo))
      } catch (e) {
        console.log('localStorage Error')
      }
    }
  }, [userInfo, history])

  return (
    <AuthForm
      type="login"
      form={loginForm}
      handleChange={handleChange}
      onSubmit={onSubmit}
      error={error}
      authRegister={authRegister}
    />
  )
}

export default withRouter(LoginForm)
