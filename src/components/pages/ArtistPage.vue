<template>
  <div>
    <h1 v-if="!artist">Artist Not Found</h1>
    <div v-else>
      <p>{{ artist.name }}</p>
      <b-img rounded="circle" :src="artist.imageUrl" fluid alt></b-img>

      <br>
      <br>
      <div>
        <router-link v-for="(genre, index) in artist.genres" :key="index" :to="'/genres/' + genre">
          {{ genre }}
        </router-link>
      </div>
      <br>
      

      <b-container>
        <b-row>
          <b-col v-for="(album,index) in albums" :key="index" sm="3">
            <b-img-lazy :src="album.image" fluid-grow thumbnail c></b-img-lazy>
            <router-link :to="'/albums/' + album._id">{{ album.title }}</router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div> 
</template>

<script>
import service from '../../artist-service'

export default {
  name: 'ArtistPage',
  data () {
    return {
      artist: {
        id: '',
        name: '',
        imageUrl: '',
        genres: []
      },
      albums: []
    }
  },
  props: {
    artistID: String
  },
  created () {
    this.loadPage(this.artistID)
  },
  async beforeRouteUpdate (to, from, next) {
    await this.loadPage(to.params.artistID);
    next();
  },
  methods: {
    async loadPage (artistID) {
      var response = await service.getArtistPage(artistID);
      response = response.data
      this.artist.id = response._id;
      this.artist.name = response.name;
      this.artist.genres = response.genres;
      this.artist.imageUrl = response.image;
      this.albums = response.albums
    }
  }
}
</script>
