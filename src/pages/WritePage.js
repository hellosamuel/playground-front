import React from 'react'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'
import EditorContainer from '../containers/write/EditorContainer'

function WritePage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <EditorContainer />
      </ContentTemplate>
    </>
  )
}

export default WritePage
