import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { UserCheckResponse, UserState } from './types'

const initialState: UserState = {
  user: null,
  checkError: null,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    check() {},
    checkSuccess(state, action: PayloadAction<UserCheckResponse>) {
      state.user = action.payload.data
      state.checkError = null
    },
    checkFailure(state, action: PayloadAction<AxiosError>) {
      state.user = null
      state.checkError = action.payload
    },
    logout() {
      return initialState
    },
  },
})

export const USER = slice.name
export const { check, checkSuccess, checkFailure, logout } = slice.actions
export default slice.reducer
