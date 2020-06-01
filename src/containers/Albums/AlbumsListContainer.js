import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GET_ALBUMS, getAlbumsRequest } from '../../modules/albums'
import useActions from '../../utils/useActions'
import AlbumsList from '../../components/Albums/AlbumsList'

function AlbumsListContainer() {
  const { albumList, isLoading } = useSelector(({ albums, loading }) => ({
    albumList: albums.albumList,
    isLoading: loading[GET_ALBUMS] !== false,
  }))

  const [getAlbums] = useActions([getAlbumsRequest], [])

  useEffect(() => {
    getAlbums()
  }, [getAlbums])

  return isLoading ? <h2>Loading...</h2> : <AlbumsList albumList={albumList} />
}

export default AlbumsListContainer
