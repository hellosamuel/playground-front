import client from './client'

export const readPost = (id) => client.get(`/posts/${id}`)

export const listPosts = ({ username, tag, page }) =>
  client.get('/posts', { params: { username, tag, page } })

export const writePost = ({ title, content, tags }) =>
  client.post('/posts', { title, content, tags })

export const updatePost = ({ id, title, content, tags }) =>
  client.patch(`/posts/${id}`, { title, content, tags })

export const removePost = (id) => client.delete(`/posts/${id}`)
