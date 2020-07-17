import React from 'react'
import PostListContainer from '../containers/posts/PostListContainer'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'

function PostListPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <PostListContainer />
      </ContentTemplate>
    </>
  )
}

export default PostListPage
