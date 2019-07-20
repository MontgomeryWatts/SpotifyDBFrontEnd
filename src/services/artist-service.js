import axios from 'axios'

export default {
  getArtistPage(id) {
    return axios({
      method: 'get',
      url: `/api/artists/${id}`
    })
  },
  getRandomArtistId(){
    return axios({
      method: 'get',
      url: '/api/artists/random'
    })
  }
}