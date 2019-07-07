<template>
  <b-container>
    <b-row>
      <b-col
            v-for="(artist,index) in results"
            :key="index"
            cols="6"
            class="my-2"
      >
        <results-card
          :imageUrl="artist.image"
          :externalLink="`spotify:artist:${artist._id}`"
          :internalLink="`/artists/${artist._id}`"
          :text="artist.name"
        ></results-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ResultsCard from '@/components/cards/ResultsCard'
import service from '@/search-service';

export default {
  name: 'ArtistSearchPage',
  components: {
    ResultsCard
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