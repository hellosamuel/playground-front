import React from 'react'
import PostListContainer from '../containers/posts/PostListContainer'
import SideBar from '../components/common/SideBar'
import HeaderContainer from '../containers/common/HeaderContainer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function PostListPage() {
  return (
    <div>
      <HeaderContainer />
      <div style={styles.container}>
        <SideBar />
        <PostListContainer />
      </div>
    </div>
  )
}

export default PostListPage
