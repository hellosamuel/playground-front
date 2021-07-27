import React from 'react'
import { logout } from '../../modules/user/slice'
import Header from '../../components/common/Header'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

function HeaderContainer() {
  const { userInfo } = useAppSelector(({ user }) => ({
    userInfo: user.user,
  }))
  const dispatch = useAppDispatch()
  const onLogout = () => {
    dispatch(logout())
  }

  return <Header userInfo={userInfo} onLogout={onLogout} />
}

export default HeaderContainer
