import getClient from './client'

const client = getClient()

export const readPost = id => client.get(`/api/posts/${id}`)

export const listPosts = () => client.get('/api/posts')
