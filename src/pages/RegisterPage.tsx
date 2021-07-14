import React from 'react'
import SideBar from '../components/common/SideBar'
import RegisterForm from '../containers/auth/RegisterForm'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'

function RegisterPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <RegisterForm />
      </ContentTemplate>
    </>
  )
}

export default RegisterPage
