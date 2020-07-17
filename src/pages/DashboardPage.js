import React from 'react'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'

function DashboardPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <h2>Dashboard Contents</h2>
      </ContentTemplate>
    </>
  )
}

export default DashboardPage
