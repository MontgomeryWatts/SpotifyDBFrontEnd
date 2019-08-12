import axios from 'axios'

export default {
  postSuggestion(suggestion){
    return axios({
      method: 'post',
      url: '/api/suggest',
      data: suggestion
    })
  }
}