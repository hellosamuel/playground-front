import React from 'react'

function PostViewer({ post, error, loading }) {
  if (loading || !post) {
    return null
  }

  return (
    <div>
      <p>{JSON.stringify(post)}</p>
    </div>
  )
}

export default PostViewer
