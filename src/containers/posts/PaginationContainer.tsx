import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'querystring'
import Pagination from '../../components/posts/Pagination'

function PaginationContainer({ location, match }) {
  const { lastPage, posts, loading } = useSelector(({ posts }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: posts.loading,
  }))

  if (!posts || loading) return null

  const { username } = match.params

  const { tag, page = 1 } = qs.parse(location.search.slice(1))

  return <Pagination tag={tag} username={username} page={parseInt(page, 10)} lastPage={lastPage} />
}

export default withRouter(PaginationContainer)
