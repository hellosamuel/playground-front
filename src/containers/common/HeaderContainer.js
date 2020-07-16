import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../modules/user'
import Header from '../../components/common/Header'

function HeaderContainer() {
  const { userInfo } = useSelector(({ user }) => ({
    userInfo: user.user,
  }))
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(logout())
  }

  return <Header userInfo={userInfo} onLogout={onLogout} />
}

export default HeaderContainer
