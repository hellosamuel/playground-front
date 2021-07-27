import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import qs from 'querystring'
import PostList from '../../components/posts/PostList'
import { readAllPosts, downloadPosts } from '../../modules/posts'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

function PostsContainer({ location, match }: RouteComponentProps<{ username: string }>) {
  const dispatch = useAppDispatch()
  const { postList, error, loading, userInfo } = useAppSelector(({ posts, user, loading }) => ({
    postList: posts.posts,
    error: posts.error,
    loading: loading.posts,
    userInfo: user.user,
  }))

  useEffect(() => {
    const { username } = match.params
    const { tag, page } = qs.parse(location.search.slice(1))

    dispatch(readAllPosts({ username, tag: tag as string, page: page as string }))
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
