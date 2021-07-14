import React from 'react'
import SideBar from '../components/common/SideBar'
import LoginForm from '../containers/auth/LoginForm'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'

function LoginPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <LoginForm />
      </ContentTemplate>
    </>
  )
}

export default LoginPage
