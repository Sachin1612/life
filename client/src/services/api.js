const { default: axios } = require("axios");

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

console.log('env', process.env)

class Api {
  constructor () {
    this.client = axios.create({
      baseURL: REACT_APP_API_URL,
      headers: { 'content-type': 'application/json' },
    })
  }

  async get(url) {
    const res = await this.client.get(url)
    console.log(url, res)
    return res.data;
  }

  async post(url, data) {
    const res = await this.client.post(url, data)
    console.log(url, res)
    return res.data;
  }

  async put(url, data) {
    const res = await this.client.put(url, data)
    console.log(url, res)
    return res.data;
  }

  async delete(url) {
    const res = await this.client.delete(url)
    console.log(url, res)
    return res.data;
  }

  // Posts
  async getPosts() {
    const res = await this.get('/posts')
    return res;
  }

  async addPost(data) {
    const res = await this.post('/posts', data)
    return res;
  }

  async deletePost(postId) {
    const res = await this.delete(`/posts?id=${postId}`)
    return res;
  }

  // Likes
  async getLikes(postId) {
    const res = await this.get(`/likes?postId=${postId}`)
    return res;
  }

  async addLike(postId) {
    const res = await this.post(`/likes`, { postId, "type": "thumb" })
    return res;
  }

  // Comments
  async getComments(postId) {
    const res = await this.get(`/comments?postId=${postId}`)
    return res;
  }

  async addComment(data) {
    const res = await this.post(`/comments`, data)
    return res;
  }
}

export default new Api()