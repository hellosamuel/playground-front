import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { readPost, unloadPost } from '../../modules/post'
import PostViewer from '../../components/post/PostViwer'

function PostViewerContainer({ match, history }) {
  const { postId } = match.params
  const dispatch = useDispatch()
  const { post, error, loading, userInfo } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      userInfo: user.user,
    })
  )

  useEffect(() => {
    dispatch(readPost(postId))
    return () => dispatch(unloadPost())
  }, [dispatch, postId])

  return <PostViewer post={post} loading={loading} error={error} />
}

export default withRouter(PostViewerContainer)
