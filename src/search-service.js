import axios from 'axios'

export default {
  getArtists(name, genres, genreMode) {
    return axios({
      method: 'get',
      url: `https://app.spotifydb.com/search/artist`,
      params: {
        name: name,
        genres: genres,
        mode: genreMode
      }
    })
  }
}