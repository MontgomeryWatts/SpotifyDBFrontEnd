<template>
  <b-container>
    <b-row>
      <b-col
            v-for="(artist,index) in results"
            :key="index"
            cols="6"
            class="my-2"
      >
        <top-card
          :internalLink="`/artists/${artist._id}`"
          :externalLink="`spotify:artist:${artist._id}`"
          :src="artist.image"
          :alt="`${artist.name}'s profile picture`"
          :footer="artist.name"
        ></top-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TopCard from '@/components/cards/TopCard'
import service from '@/services/search-service';

export default {
  name: 'ArtistSearchPage',
  components: {
    TopCard
  },
  props: {
    name: {
      type: String,
      required: false
    },
    genres: {
      type: Array,
      required: false
    },
    mode: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      results: []
    }
  },
  created () {
    this.getArtists(this.name,this.genres,this.mode);
  },
  async beforeRouteUpdate (to, from, next) {
    await this.getArtists(this.name,this.genres,this.mode);
    next();
  },
  methods: {
    async getArtists(name, genres, mode) {
      let response = await service.getArtists(name, genres, mode);
      this.results = response.data;
    }
  }
}
</script>