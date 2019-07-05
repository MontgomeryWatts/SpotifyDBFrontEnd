import axios from 'axios'

export default {
  getArtistPage(id) {
    return axios({
      method: 'get',
      url: `http://spotifydb.us-east-1.elasticbeanstalk.com/artists/${id}`
    })
  },
  getRandomArtistId(){
    return axios({
      method: 'get',
      url: 'http://spotifydb.us-east-1.elasticbeanstalk.com/artists/random'
    })
  }
}