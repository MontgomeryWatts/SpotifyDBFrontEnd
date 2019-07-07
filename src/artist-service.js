import axios from 'axios'

export default {
  getArtistPage(id) {
    return axios({
      method: 'get',
      url: `https://app.spotifydb.com/artists/${id}`
    })
  },
  getRandomArtistId(){
    return axios({
      method: 'get',
      url: 'https://app.spotifydb.com/artists/random'
    })
  }
}