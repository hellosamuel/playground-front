import React from 'react'
import SideBar from '../components/common/SideBar'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function DashboardPage() {
  return (
    <div style={styles.container}>
      <SideBar />
      <h2>Dashboard Contents</h2>
    </div>
  )
}

export default DashboardPage
