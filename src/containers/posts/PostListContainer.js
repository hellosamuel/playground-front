import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import qs from 'querystring'
import PostList from '../../components/posts/PostList'
import { actions as postsActions } from '../../modules/posts'

function PostsContainer({ location, match }) {
  const dispatch = useDispatch()
  const { postList, error, loading, userInfo } = useSelector(
    ({ posts, user }) => ({
      postList: posts.posts,
      error: posts.error,
      loading: posts.loading,
      userInfo: user.user,
    })
  )

  useEffect(() => {
    const { username } = match.params
    const { tag, page } = qs.parse(location.search.slice(1))

    dispatch(postsActions.read.allPosts.request({ username, tag, page }))
  }, [dispatch, match.params, location.search])

  const handleDownloadOnClick = () => {
    dispatch(postsActions.download.request())
  }

  return (
    <PostList
      postList={postList}
      error={!!error}
      loading={loading}
      showWriteBtn={!!userInfo}
      handleDownloadOnClick={handleDownloadOnClick}
    />
  )
}

PostsContainer.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}
export default withRouter(PostsContainer)
