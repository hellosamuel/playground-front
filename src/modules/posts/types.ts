import { AxiosError, AxiosResponse } from 'axios'
import { Post } from '../post'

export interface PostsReadAllPostsPayload {
  username: string
  tag: string
  page: string
}

export type PostsReadAllPostsResponse = AxiosResponse<Post[]>
export type PostsReadPostResponse = AxiosResponse<Post>

export interface PostsState {
  post: Post | null
  posts: Post[]
  lastPage: number
  error: AxiosError | null
}
