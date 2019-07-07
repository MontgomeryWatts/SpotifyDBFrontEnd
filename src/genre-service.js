import axios from 'axios'

export default {
  getGenres(){
    return axios({
      method: 'get',
      url: 'https://app.spotifydb.com/genres'
    })
  }
}