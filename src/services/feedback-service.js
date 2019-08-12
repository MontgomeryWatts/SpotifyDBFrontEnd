import axios from 'axios'

export default {
  postFeedback(feedback){
    return axios({
      method: 'post',
      url: '/api/feedback',
      data: feedback
    })
  }
}