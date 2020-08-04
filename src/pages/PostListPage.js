import React from 'react'
import PostListContainer from '../containers/posts/PostListContainer'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'
import ContentTemplate from '../components/common/ContentTemplate'
import PaginationContainer from '../containers/posts/PaginationContainer'

function PostListPage() {
  return (
    <>
      <HeaderContainer />
      <ContentTemplate>
        <SideBar />
        <PostListContainer />
        <PaginationContainer />
      </ContentTemplate>
    </>
  )
}

export default PostListPage
