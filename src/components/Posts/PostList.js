import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { actions as postsActions } from '../../modules/posts'
import PostDetail from './PostDetail'

function PostList() {
  const dispatch = useDispatch()
  const { postList } = useSelector(({ posts }) => posts)

  useEffect(() => {
    dispatch(postsActions.read.allPosts.request())

    return () => dispatch(postsActions.clear.state())
  }, [dispatch])

  const handleDownloadOnclick = () => {
    dispatch(postsActions.download.request())
  }

  return (
    <div>
      <h2>PostList Contents</h2>
      <button type="button" onClick={handleDownloadOnclick}>
        Download
      </button>
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Route exact path="/posts/:postId" component={PostDetail} />
    </div>
  )
}

export default PostList
