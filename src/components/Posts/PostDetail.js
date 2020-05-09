import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {
  const { item } = useParams()

  return (
    <div>
      <h3>PostDetail Contents</h3>
      {item}
    </div>
  )
}

export default PostDetail
