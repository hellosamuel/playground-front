import React from 'react'
import SideBar from '../components/common/SideBar'
import LoginForm from '../containers/auth/LoginForm'
import HeaderContainer from '../containers/common/HeaderContainer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function LoginPage() {
  return (
    <div>
      <HeaderContainer />
      <div style={styles.container}>
        <SideBar />
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
