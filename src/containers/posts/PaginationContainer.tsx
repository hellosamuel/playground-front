import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import qs from 'querystring'
import Pagination from '../../components/posts/Pagination'
import { useAppSelector } from '../../hooks/hooks'

function PaginationContainer({ location, match }: RouteComponentProps<{ username: string }>) {
  const { lastPage, posts, loading } = useAppSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading.posts,
  }))

  if (!posts || loading) return null

  const { username } = match.params

  const { tag, page = 1 } = qs.parse(location.search.slice(1))

  return (
    <Pagination
      tag={tag as string}
      username={username}
      page={parseInt(page as string, 10)}
      lastPage={lastPage}
    />
  )
}

export default withRouter(PaginationContainer)
