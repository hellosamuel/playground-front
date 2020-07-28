import React from 'react'
import PostViewerContainer from '../containers/post/PostViewerContainer'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'

function PostPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <PostViewerContainer />
      </ContentTemplate>
    </>
  )
}

export default PostPage
