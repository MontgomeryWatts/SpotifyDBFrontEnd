<template>
  <b-container>
    <b-row>
      <b-col v-for="(genre,index) in genres" :key="index" sm="3">
        <b-link :to="{ path: '/search/artist', query: { genres: genre}}">{{ genre }}</b-link>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
import services from '@/services/genre-service';

export default {
  name: 'GenrePage', 
  data () {
    return {
      genres: []
    }
  },
  created () {
    this.loadGenres();
  },
  methods: {
    async loadGenres() {
      let response = await services.getGenres();
      this.genres = response.data.genres;
    }
  }
}
</script>
