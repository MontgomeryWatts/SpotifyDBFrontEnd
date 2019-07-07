import axios from 'axios'

export default {
  getAlbumPage(id) {
    return axios({
      method: 'get',
      url: `https://app.spotifydb.com/albums/${id}`
    })
  }
}