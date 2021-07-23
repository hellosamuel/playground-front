import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../modules/post'
import Button from '../common/Button'

const styles = {
  postMenu: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '3rem',
  },
  postListBlock: { marginTop: '3rem' },
  postItemBlock: { paddingBottom: '3rem' },
  hrMargin: {
    height: '1px',
    border: 'none',
    marginBottom: '3rem',
    backgroundColor: 'lightgray',
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

function PostItem({ post }: { post: Post }) {
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
      <span style={styles.info}>{new Date(createdAt).toLocaleDateString()}</span>
      <div style={styles.tags}>
        {tags.map((tag) => (
          <Link style={styles.tags.tag} to={`/posts/?tag=${tag}`} key={tag}>
            #{tag}
          </Link>
        ))}
      </div>
      <p>{content}</p>
    </div>
  )
}

interface PostListProps {
  postList: Post[]
  error: boolean
  loading: boolean
  showWriteBtn: boolean
  handleDownloadOnClick: () => void
}
function PostList({
  postList,
  error,
  loading,
  showWriteBtn,
  handleDownloadOnClick,
}: PostListProps) {
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

export default PostList
