import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { actions as postsActions } from '../../modules/posts'

function PostDetail({ match }) {
  const { postId } = match.params
  const dispatch = useDispatch()
  const { postDetail } = useSelector(({ posts }) => posts)

  const getPostRequest = useCallback(() => {
    dispatch(postsActions.read.post.request(postId))
  }, [dispatch, postId])

  useEffect(() => {
    getPostRequest()
  }, [getPostRequest])

  return postDetail ? (
    <div>
      <h3>PostDetail Contents</h3>
      <h4>Title: {postDetail.title}</h4>
      <h5>Body: {postDetail.body}</h5>
    </div>
  ) : null
}

PostDetail.propTypes = {
  match: PropTypes.object.isRequired,
}

export default PostDetail
