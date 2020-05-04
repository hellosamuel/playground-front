import React from 'react'
import PropTypes from 'prop-types'

function PostDetail({ title }) {
  return <div>{title}</div>
}

PostDetail.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PostDetail
