import { PostsReadAllPostsPayload } from '../../modules/posts'
import { UpdatePostPayload, WritePostPayload } from '../../modules/write'
import client from './client'

export const readPost = (id: string) => client.get(`/posts/${id}`)

export const listPosts = ({ username, tag, page }: PostsReadAllPostsPayload) =>
  client.get('/posts', { params: { username, tag, page } })

export const writePost = ({ title, content, tags }: WritePostPayload) =>
  client.post('/posts', { title, content, tags })

export const updatePost = ({ id, title, content, tags }: UpdatePostPayload) =>
  client.patch(`/posts/${id}`, { title, content, tags })

export const removePost = (id: string) => client.delete(`/posts/${id}`)
