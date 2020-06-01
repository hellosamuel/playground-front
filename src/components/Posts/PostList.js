import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import PostDetail from './PostDetail'

function PostList({ postList, handleDownloadOnClick }) {
  return (
    <div>
      <h2>PostList Contents</h2>
      <button type="button" onClick={handleDownloadOnClick}>
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

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
  handleDownloadOnClick: PropTypes.func.isRequired,
}

export default PostList
