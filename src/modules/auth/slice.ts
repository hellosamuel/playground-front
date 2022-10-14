import { AxiosError } from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AuthState,
  AuthRegisterResponse,
  AuthLoginResponse,
  AuthLoginPayload,
  AuthRegisterPayload,
} from './types'

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
    register(_state, _action: PayloadAction<AuthRegisterPayload>) {},
    registerSuccess(state, action: PayloadAction<AuthRegisterResponse>) {
      state.authRegister = action.payload.data
      state.authError = null
    },
    registerFailure(state, action: PayloadAction<AxiosError>) {
      state.authError = action.payload
    },
    login(_state, _action: PayloadAction<AuthLoginPayload>) {},
    loginSuccess(state, action: PayloadAction<AuthLoginResponse>) {
      state.authLogin = action.payload.data
      state.authError = null
    },
    loginFailure(state, action: PayloadAction<AxiosError>) {
      state.authLogin = null
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
