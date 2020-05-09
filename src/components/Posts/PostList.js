import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { actions as postsActions } from '../../modules/posts'
import PostDetail from './PostDetail'

function PostList() {
  const dispatch = useDispatch()
  const postStore = useSelector(({ posts }) => posts)

  useEffect(() => {
    dispatch(postsActions.read.allPosts.request())
  }, [dispatch])

  return (
    <div>
      <h2>PostList Contents</h2>
      <ul>
        {postStore.postList.map(item => (
          <li key={item}>
            <Link to={`/posts/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Route exact path="/posts/:item">
        <PostDetail />
      </Route>
    </div>
  )
}

export default PostList
