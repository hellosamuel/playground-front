import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actions as postsActions } from '../../modules/posts'

function PostDetail() {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { postDetail } = useSelector(({ posts }) => posts)

  useEffect(() => {
    dispatch(postsActions.read.post.request(postId))
  }, [dispatch, postId])

  return postDetail ? (
    <div>
      <h3>PostDetail Contents</h3>
      <h4>Title: {postDetail.title}</h4>
      <h5>Body: {postDetail.body}</h5>
    </div>
  ) : null
}

export default PostDetail
