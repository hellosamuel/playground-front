import client from './client'
import { AuthLoginPayload, AuthRegisterPayload } from '../../modules/auth'

export const register = ({ username, password }: AuthRegisterPayload) =>
  client.post('/auth/register', { username, password })

export const login = ({ username, password }: AuthLoginPayload) =>
  client.post('/auth/login', { username, password })

export const check = () => client.get('/auth/check')

export const logout = () => client.post('/auth/logout')
