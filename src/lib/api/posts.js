import client from './client'

export const readPost = id => client.get(`/posts/${id}`)

export const listPosts = ({ username, tag, page }) =>
  client.get('/posts', { params: { username, tag, page } })

export const removePost = id => client.delete(`/posts/${id}`)
