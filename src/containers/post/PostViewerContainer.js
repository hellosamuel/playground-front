import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { readPost, unloadPost } from '../../modules/post'
import PostViewer from '../../components/post/PostViwer'
import PostActionButtons from '../../components/post/PostActionButtons'
import { removePost } from '../../lib/api/posts'

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

  const onEdit = () => {
    console.log('onEdit')
  }

  const onRemove = async () => {
    try {
      await removePost(postId)
      history.push('/posts')
    } catch (e) {
      console.log(e)
    }
  }

  const isOwner = (userInfo && userInfo.id) === (post && post.userId)
  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        isOwner && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  )
}

PostViewerContainer.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(PostViewerContainer)
