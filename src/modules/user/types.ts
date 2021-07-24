import { AxiosError, AxiosResponse } from 'axios'

export interface User {
  username: string
}

export type UserCheckResponse = AxiosResponse<User>

export interface UserState {
  user: User | null
  checkError: AxiosError | null
}
