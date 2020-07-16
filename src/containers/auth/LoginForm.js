import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { initialize, login } from '../../modules/auth'
import { check } from '../../modules/user'
import AuthForm from '../../components/auth/AuthForm'

function LoginForm({ history }) {
  const dispatch = useDispatch()
  const { authLogin, authRegister, authError, userInfo } = useSelector(
    ({ auth, user }) => ({
      authLogin: auth.authLogin,
      authRegister: auth.authRegister,
      authError: auth.authError,
      userInfo: user.user,
    })
  )
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setLoginForm({ ...loginForm, [name]: value })
  }

  const onSubmit = e => {
    e.preventDefault()
    const { username, password } = loginForm
    dispatch(login({ username, password }))
  }

  useEffect(() => () => dispatch(initialize()), [dispatch])

  useEffect(() => {
    if (authError) {
      setError(authError.response.data)
      return
    }

    if (authLogin) {
      dispatch(check())
    }
  }, [authLogin, authError, dispatch])

  useEffect(() => {
    if (userInfo) {
      history.push('/')
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

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(LoginForm)
