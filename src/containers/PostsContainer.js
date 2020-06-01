import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostList from '../components/Posts/PostList'
import { actions as postsActions } from '../modules/posts'

function PostsContainer() {
  const dispatch = useDispatch()
  const { postList } = useSelector(({ posts }) => posts)

  useEffect(() => {
    dispatch(postsActions.read.allPosts.request())

    return () => dispatch(postsActions.clear.state())
  }, [dispatch])

  const handleDownloadOnClick = () => {
    dispatch(postsActions.download.request())
  }

  return (
    <PostList
      postList={postList}
      handleDownloadOnClick={handleDownloadOnClick}
    />
  )
}

export default PostsContainer
