import React from 'react'
import SideBar from '../components/common/SideBar'
import RegisterForm from '../containers/auth/RegisterForm'
import HeaderContainer from '../containers/common/HeaderContainer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function RegisterPage() {
  return (
    <div>
      <HeaderContainer />
      <div style={styles.container}>
        <SideBar />
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
