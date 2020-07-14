import React from 'react'
import PostListContainer from '../containers/PostListContainer'
import SideBar from '../components/common/SideBar'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
  },
}

function PostListPage() {
  return (
    <div style={styles.container}>
      <SideBar />
      <PostListContainer />
    </div>
  )
}

export default PostListPage
