import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  head: {
    borderBottom: '1px solid lightgray',
    paddingBottom: '3rem',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    lineHeight: '1.5',
    margin: 0,
  },
  info: { marginRight: '1rem' },
  content: { fontSize: '1.3125.rem' },
  tags: {
    marginTop: '0.5rem',
    tag: {
      marginRight: '0.5rem',
      display: 'inline-block',
    },
  },
}

function PostViewer({ post, error, loading, actionButtons }) {
  if (error) {
    return <h1>Error Occur!</h1>
  }

  if (loading || !post) {
    return null
  }

  const { title, content, tags, createdAt, Author } = post
  return (
    <div>
      {actionButtons}
      <div style={styles.head}>
        <h1 style={styles.title}>{title}</h1>
        <span style={styles.info}>
          <Link to={`/posts/@${Author.username}`}>
            <b>{Author.username}</b>
          </Link>
        </span>
        <span style={styles.info}>{new Date(createdAt).toLocaleDateString()}</span>
        <div style={styles.tags}>
          {tags.map((tag) => (
            <Link style={styles.tags.tag} to={`/posts/?tag=${tag}`} key={tag}>
              <u>{`#${tag}`}</u>
            </Link>
          ))}
        </div>
      </div>
      <div style={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostViewer
