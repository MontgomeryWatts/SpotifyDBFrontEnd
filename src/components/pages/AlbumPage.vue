<template>
  <div>
    <h1 v-if="!album">
      Album not found
    </h1>
    <b-container v-else>
      <b-row>
        <b-col
          align-self="center"
          offset="3"
          cols="6"
        >
          <top-card
            :externalLink="`spotify:album:${album.id}`"
            :src="album.imageUrl"
            :alt="`${album.title}'s album art`"
            :footer="album.title"
          ></top-card>
        </b-col>
      </b-row>

      <b-link 
        v-for="(credit) in album.credits" 
        :key="credit.id"
        :to="`/artists/${credit.id}`"
      >
        {{ credit.name }} 
      </b-link>
      
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
</template>

<script>
import service from '@/services/album-service'
import TopCard from '@/components/cards/TopCard'

export default {
  name: 'AlbumPage',
  components: {
    TopCard
  },
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
    albumID: {
      type: String,
      required: true
    }
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
