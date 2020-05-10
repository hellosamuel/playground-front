import axios from 'axios'
import Api from './index'

class Posts extends Api {
  constructor() {
    super()
    this.baseUrl = `${this.baseUrl}/posts`
    this.getAllPosts = this.getAllPosts.bind(this)
    this.getPost = this.getPost.bind(this)
  }

  getAllPosts() {
    return axios.get(this.baseUrl)
  }

  getPost(postId) {
    return axios.get(`${this.baseUrl}/${postId}`)
  }
}

const PostsApi = new Posts()

export default PostsApi
