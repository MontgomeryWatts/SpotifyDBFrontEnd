import axios from 'axios'

export default {
  getSimilarNames(name) {
    return axios({
      method: 'post',
      url: 'http://localhost:80/autocomplete',
      data: {
        query: name
      }
    })
  }
}