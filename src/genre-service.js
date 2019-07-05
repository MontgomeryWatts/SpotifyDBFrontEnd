import axios from 'axios'

export default {
  getGenres(){
    return axios({
      method: 'get',
      url: 'http://localhost:8888/genres'
    })
  }
}