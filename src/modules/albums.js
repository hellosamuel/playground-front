import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { takeLatest } from 'redux-saga/effects'
import { getAlbums, getAlbum } from '../api/albums'
import createRequestSaga from '../utils/createRequestSaga'

export const GET_ALBUMS = 'albums/GET_ALBUMS'
const GET_ALBUMS_SUCCESS = 'albums/GET_ALBUMS_SUCCESS'
const GET_ALBUMS_FAILURE = 'albums/GET_ALBUMS_FAILURE'

export const GET_ALBUM = 'albums/GET_ALBUM'
const GET_ALBUM_SUCCESS = 'albums/GET_ALBUM_SUCCESS'
const GET_ALBUM_FAILURE = 'albums/GET_ALBUM_FAILURE'

export const getAlbumsRequest = createAction(GET_ALBUMS)
export const getAlbumRequest = createAction(GET_ALBUM, albumId => albumId)

const getAlbumsSaga = createRequestSaga(GET_ALBUMS, getAlbums)
const getAlbumSaga = createRequestSaga(GET_ALBUM, getAlbum)

export function* albumSaga() {
  yield takeLatest(GET_ALBUMS, getAlbumsSaga)
  yield takeLatest(GET_ALBUM, getAlbumSaga)
}

const initialState = {
  albumList: [],
  albumDetail: null,
  errorMessage: null,
}

const albumsReducer = handleActions(
  {
    [GET_ALBUMS_SUCCESS]: (state, { payload: albumList }) =>
      produce(state, draft => {
        draft.albumList = albumList
      }),
    [GET_ALBUMS_FAILURE]: (state, { payload: errorMessage }) =>
      produce(state, draft => {
        draft.errorMessage = errorMessage
      }),
    [GET_ALBUM_SUCCESS]: (state, { payload: albumDetail }) =>
      produce(state, draft => {
        draft.albumDetail = albumDetail
      }),
    [GET_ALBUM_FAILURE]: (state, { payload: errorMessage }) =>
      produce(state, draft => {
        draft.errorMessage = errorMessage
      }),
  },
  initialState
)

export default albumsReducer
