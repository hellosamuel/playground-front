import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function AlbumsList({ albumList }) {
  return (
    <div>
      <h2>Albums Contents</h2>
      <ul>
        {albumList.map(album => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

AlbumsList.propTypes = {
  albumList: PropTypes.array.isRequired,
}

export default AlbumsList
