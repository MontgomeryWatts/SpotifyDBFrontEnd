<template>
  <div>
    <Navbar/>
    <h1 v-if="loading">Loading page..</h1>
    <div v-else>
      <p>{{ name }}</p>
      <b-img rounded="circle" :src="imageUrl" fluid alt></b-img>

      <br>
      <br>
      <div>
        <router-link v-for="(genre, index) in genres" :key="index" :to="'/genres/' + genre">
          {{ genre }}
        </router-link>
      </div>
      <br>
      

      <b-container>
        <b-row>
          <b-col v-for="(album,index) in albums" :key="index" sm="3" md="3" lg="3" xl="3">
            <b-img-lazy :src="album.image" fluid-grow thumbnail c></b-img-lazy>
            <router-link :to="'/albums/' + album._id">{{ album.title }}</router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div> 
</template>

<script>
import Navbar from '../Navbar'
import service from '../../artist-service'

export default {
  name: 'ArtistPage',
  components: {
    Navbar
  },
  data () {
    return {
      loading: true,
      id: '',
      name: '',
      imageUrl: '',
      genres: [],
      albums: []
    }
  },
  props: {
    artistID: String
  },
  created () {
    this.loadPage(this.artistID)
  },
  methods: {
    async loadPage (artistID) {
      var response = await service.getArtistPage(artistID);
      response = response.data
      this.loading = false;
      this.id = response._id;
      this.name = response.name;
      this.genres = response.genres;
      this.imageUrl = response.image;
      this.albums = response.albums
    }
  }
}
</script>
