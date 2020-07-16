import React from 'react'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function DashboardPage() {
  return (
    <div>
      <HeaderContainer />
      <div style={styles.container}>
        <SideBar />
        <h2>Dashboard Contents</h2>
      </div>
    </div>
  )
}

export default DashboardPage
