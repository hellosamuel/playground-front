import React from 'react'
import PostDetail from './PostDetail'
import usePostList from '../../hooks/posts/usePostList'

function PostList() {
  const postList = usePostList()

  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {postList.map(item => (
          <PostDetail key={item} title={item} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
