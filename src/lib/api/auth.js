import getClient from './client'

const client = getClient({ baseURL: '/api/auth' })

export const register = ({ username, password }) =>
  client.post('/register', { username, password })

export const login = ({ username, password }) =>
  client.post('/login', { username, password })

export const check = () => client.get('/check')

export const logout = () => client.post('/logout')
