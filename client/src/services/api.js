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

  async put(url, data) {
    const res = await this.client.post(url, data)
    console.log(url, res)
    return res.data;
  }

  async getPosts() {
    const res = await this.get('/posts')
    return res;
  }

  async getLikes(postId) {
    const res = await this.get(`/likes?postId=${postId}`)
    return res;
  }

  async addLike(postId) {
    const res = await this.put(`/likes`, { postId, "type": "thumb" })
    return res;
  }
}

export default new Api()