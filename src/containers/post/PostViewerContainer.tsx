import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { readPost, unloadPost } from '../../modules/post'
import PostViewer from '../../components/post/PostViewer'
import PostActionButtons from '../../components/post/PostActionButtons'
import { removePost } from '../../lib/api/posts'
import { setOriginalPost } from '../../modules/write'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

function PostViewerContainer({ match, history }: RouteComponentProps<{ postId: string }>) {
  const { postId } = match.params
  const dispatch = useAppDispatch()
  const { post, error, loading, userInfo } = useAppSelector(({ post, loading, user }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
    userInfo: user.user,
  }))

  useEffect(() => {
    dispatch(readPost(postId))
    return () => {
      dispatch(unloadPost())
    }
  }, [dispatch, postId])

  const onEdit = () => {
    if (post) {
      dispatch(setOriginalPost(post))
      history.push('/posts/write')
    }
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
      actionButtons={isOwner && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
    />
  )
}

export default withRouter(PostViewerContainer)
