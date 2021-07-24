import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'querystring'
import PostList from '../../components/posts/PostList'
import { readAllPosts, downloadPosts } from '../../modules/posts'

function PostsContainer({ location, match }) {
  const dispatch = useDispatch()
  const { postList, error, loading, userInfo } = useSelector(({ posts, user }) => ({
    postList: posts.posts,
    error: posts.error,
    loading: posts.loading,
    userInfo: user.user,
  }))

  useEffect(() => {
    const { username } = match.params
    const { tag, page } = qs.parse(location.search.slice(1))

    dispatch(readAllPosts({ username, tag, page }))
  }, [dispatch, match.params, location.search])

  const handleDownloadOnClick = () => {
    dispatch(downloadPosts())
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

export default withRouter(PostsContainer)
