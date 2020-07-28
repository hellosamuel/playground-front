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
  postListBlock: {
    marginTop: '3rem',
    marginRight: '1rem',
  },
  postItemBlock: {
    paddingBottom: '3rem',
  },
  hrMargin: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2rem',
    marginTop: 0,
    marginBottom: 0,
  },
  info: { marginLeft: '1rem' },
  tags: {
    marginTop: '0.5rem',
    tag: {
      marginRight: '0.5rem',
      display: 'inline-block',
    },
  },
}

function PostItem({ post }) {
  const { createdAt, Author, tags, title, content, id } = post
  return (
    <div style={styles.postItemBlock}>
      <h2 style={styles.title}>
        <Link to={`/posts/@${Author.username}/${id}`}>{title}</Link>
      </h2>
      <span>
        <b>
          <Link to={`/posts/@${Author.username}`}>{Author.username}</Link>
        </b>
      </span>
      <span style={styles.info}>
        {new Date(createdAt).toLocaleDateString()}
      </span>
      <div style={styles.tags}>
        {tags.map(tag => (
          <Link style={styles.tags.tag} to={`/posts/?tag=${tag}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
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
      <div style={styles.postListBlock}>
        {postList.map((post, idx) => (
          <div key={post.id}>
            <PostItem post={post} />
            {idx !== postList.length - 1 && <hr style={styles.hrMargin} />}
          </div>
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

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostList
