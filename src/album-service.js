import axios from 'axios'

export default {
  getAlbumPage(id) {
    return axios({
      method: 'get',
      url: `http://spotifydb.us-east-1.elasticbeanstalk.com/albums/${id}`
    })
  }
}