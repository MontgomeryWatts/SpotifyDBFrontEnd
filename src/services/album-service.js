import axios from 'axios'

export default {
  getAlbumPage(id) {
    return axios({
      method: 'get',
      url: `/api/albums/${id}`
    })
  }
}