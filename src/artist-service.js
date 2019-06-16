import axios from 'axios'

export default {
  getArtistPage(id) {
    return axios({
      method: 'get',
      url: `http://localhost:8888/artists/${id}`
    })
  },
  getRandomArtistId(){
    return axios({
      method: 'get',
      url: 'http://localhost:8888/artists/random'
    })
  }
}