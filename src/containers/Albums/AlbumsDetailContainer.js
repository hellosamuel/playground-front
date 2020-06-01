import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GET_ALBUM, getAlbumRequest } from '../../modules/albums'
import useActions from '../../utils/useActions'
import AlbumsDetail from '../../components/Albums/AlbumsDetail'

function AlbumsDetailContainer() {
  const { albumId } = useParams()
  const { albumDetail, isLoading } = useSelector(({ albums, loading }) => ({
    albumDetail: albums.albumDetail,
    isLoading: loading[GET_ALBUM] !== false,
  }))

  const [getAlbum] = useActions([getAlbumRequest], [])

  useEffect(() => {
    getAlbum(albumId)
  }, [getAlbum, albumId])

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <AlbumsDetail albumDetail={albumDetail} />
  )
}

export default AlbumsDetailContainer
