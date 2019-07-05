<template>
  <div>
    <h1 v-if="!album">
      Album not found
    </h1>
    <div v-else>
      
      <b-img :src="album.imageUrl" alt></b-img>
      <a :href="`spotify:album:${album.id}`">
        <p>{{ album.title }}</p>
      </a>

      <router-link  v-for="(credit) in album.credits" :key="credit.id" :to="`/artists/${credit.id}`">
        {{ credit.name }} 
      </router-link>

      <b-container>
        <b-list-group>
          <b-list-group-item 
            v-for="(song, index) in album.songs" 
            :key="index"
            :href="`spotify:track:${song.trackId}`"
          >
            {{ song.title }}
          </b-list-group-item>
        </b-list-group>
      </b-container>

    </div>
  </div>
</template>

<script>
import service from '@/album-service'

export default {
  name: 'AlbumPage',
  data () {
    return {
      album: {
        id: '',
        title: '',
        imageUrl: '',
        credits: [],
        songs: []
      }
    }
  },
  props: {
    albumID:{ type: String, required: true}
  },
  created () {
    this.loadPage(this.albumID)
  },
  methods: {
    async loadPage (albumID) {
      let response = await service.getAlbumPage(albumID);
      response = response.data;
      this.album.id = response._id;
      this.album.title = response.title;
      this.album.imageUrl = response.image;
      this.album.credits = response.credits;
      this.album.songs = response.songs
    }
  }
}
</script>
