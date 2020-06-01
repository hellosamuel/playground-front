import React from 'react'
import PropTypes from 'prop-types'

function AlbumsDetail({ albumDetail }) {
  return (
    <>
      <h2>Albums Detail Contents</h2>
      <p>
        ID: {albumDetail.id} / TITLE: {albumDetail.title}
      </p>
    </>
  )
}

AlbumsDetail.propTypes = {
  albumDetail: PropTypes.object.isRequired,
}
export default AlbumsDetail
