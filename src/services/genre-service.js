import axios from 'axios'

export default {
  getGenres(){
    return axios({
      method: 'get',
      url: '/api/genres'
    })
  }
}