import client from './client'

export const readPost = id => client.get(`/posts/${id}`)

export const listPosts = () => client.get('/posts')
