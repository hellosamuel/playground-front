import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../common/Button'

const styles = {
  postMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '3rem',
  },
}

function PostItem({ post }) {
  const { createdAt, Author, tags, title, content, id } = post
  return (
    <div>
      <h2>
        <Link to={`/posts/@${Author.username}/${id}`}>{title}</Link>
      </h2>
      <span>
        <b>
          <Link to={`/posts/@${Author.username}`}>{Author.username}</Link>
        </b>
      </span>
      <span>{new Date(createdAt).toLocaleDateString()}</span>
      {tags.map(tag => (
        <Link to={`/posts/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
      <p>{content}</p>
    </div>
  )
}

function PostList({
  postList,
  error,
  loading,
  showWriteBtn,
  handleDownloadOnClick,
}) {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error occur!</p>
  }

  return (
    <div>
      <h2>PostList Contents</h2>
      <div style={styles.postMenu}>
        <Button label="Download" onClick={handleDownloadOnClick} />
        {showWriteBtn && (
          <Link to="/posts/write">
            <Button label="Write" color="orange" />
          </Link>
        )}
      </div>
      <div>
        {postList.map(post => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  showWriteBtn: PropTypes.bool.isRequired,
  handleDownloadOnClick: PropTypes.func.isRequired,
}

export default PostList
