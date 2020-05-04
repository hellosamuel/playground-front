import React from 'react'
import PostDetail from './PostDetail'

function PostList() {
  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {['first', 'second', 'third'].map(item => (
          <PostDetail key={item} title={item} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
