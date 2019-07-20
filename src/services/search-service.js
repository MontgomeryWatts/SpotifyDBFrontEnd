import axios from 'axios'

export default {
  getArtists(name, genres, genreMode) {
    return axios({
      method: 'get',
      url: `/api/search/artists`,
      params: {
        name: name,
        genres: genres,
        mode: genreMode
      }
    })
  }
}