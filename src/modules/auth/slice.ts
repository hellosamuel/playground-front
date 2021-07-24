import { AxiosError } from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, AuthRegisterResponse, AuthLoginResponse } from './types'

const initialState: AuthState = {
  authRegister: null,
  authLogin: null,
  authError: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialize() {
      return initialState
    },
    register() {},
    registerSuccess(state, action: PayloadAction<AuthRegisterResponse>) {
      state.authRegister = action.payload.data
      state.authError = null
    },
    registerFailure(state, action: PayloadAction<AxiosError>) {
      state.authError = action.payload
    },
    login() {},
    loginSuccess(state, action: PayloadAction<AuthLoginResponse>) {
      state.authRegister = action.payload.data
      state.authError = null
    },
    loginFailure(state, action: PayloadAction<AxiosError>) {
      state.authRegister = null
      state.authError = action.payload
    },
  },
})

export const AUTH = slice.name
export const {
  initialize,
  register,
  registerSuccess,
  registerFailure,
  login,
  loginSuccess,
  loginFailure,
} = slice.actions
export default slice.reducer
