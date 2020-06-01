import axios from 'axios'

export const getAlbums = () => axios.get('/albums')
export const getAlbum = albumId => axios.get(`/albums/${albumId}`)
