import axios from 'axios'

export default {
  getGenres(){
    return axios({
      method: 'get',
      url: 'http://spotifydb.us-east-1.elasticbeanstalk.com/genres'
    })
  }
}