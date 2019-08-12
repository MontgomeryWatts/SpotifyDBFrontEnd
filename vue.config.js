module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: "https://spotifydb.com"
        }
      }
    }
  }