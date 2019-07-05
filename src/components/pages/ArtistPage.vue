<template>
  <div>
    <h1 v-if="!artist">Artist Not Found</h1>
    <div v-else>
      <p>{{ artist.name }}</p>
      <b-img
        class="artist-image mb-3"
        rounded="circle"
        :src="artist.imageUrl"
        :alt="`${artist.name}'s profile picture`"
        center
      ></b-img>

      <b-button
        v-for="(genre, index) in artist.genres"
        :key="index"
        :to="`/genres/${genre}`"
        class="mx-1 my-1"
        pill
      >{{ genre }}</b-button>

      <b-container class="mt-1">
        <b-row>
          <b-col
            v-for="(album,index) in albums"
            :key="index"
            sm="3"
            class="my-2"
          >
            <b-img-lazy :src="album.image" thumbnail></b-img-lazy>
            <b-link :to="`/albums/${album._id}`">{{ album.title }}</b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div> 
</template>

<script>
import service from '@/artist-service'

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
    artistID: {
        type: String,
        required: true
      }
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
      let response = await service.getArtistPage(artistID);
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

<style scoped>
.artist-image {
  height: 200px;
  width: 200px;
}
</style>
