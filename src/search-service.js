import axios from 'axios'

export default {
  getArtists(name, genres, genreMode) {
    return axios({
      method: 'get',
      url: `http://spotifydb.us-east-1.elasticbeanstalk.com/search/artist`,
      params: {
        name: name,
        genres: genres,
        mode: genreMode
      }
    })
  }
}