import { AxiosError, AxiosResponse } from 'axios'
import { Post } from '../post'

export type WritePostPayload = Pick<Post, 'title' | 'content' | 'tags'>

export type WritePostResponse = AxiosResponse<Post>
export type UpdatePostResponse = AxiosResponse<Post>

export interface WriteState {
  post: Post | null
  postError: AxiosError | null
  postForEdit: WritePostPayload | null
  originalPostId: Post['id'] | null
}
