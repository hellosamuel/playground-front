import { AxiosError, AxiosResponse } from 'axios'

export interface AuthRegisterPayload {
  username: string
  password: string
}

interface AuthRegister {
  id: string
  username: string
}

export interface AuthLoginPayload {
  username: string
  password: string
}

interface AuthLogin {
  id: string
  username: string
}

export type AuthRegisterResponse = AxiosResponse<AuthRegister>
export type AuthLoginResponse = AxiosResponse<AuthLogin>

export interface AuthState {
  authRegister: AuthRegister | null
  authLogin: AuthLogin | null
  authError: AxiosError | null
}
