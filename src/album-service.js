import axios from 'axios'

export default {
  getAlbumPage(id) {
    return axios({
      method: 'get',
      url: `http://localhost:8888/albums/${id}`
    })
  }
}