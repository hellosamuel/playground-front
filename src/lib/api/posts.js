import client from './client'

export const readPost = id => client.get(`/api/posts/${id}`)

export const listPosts = () => client.get('/api/posts')
