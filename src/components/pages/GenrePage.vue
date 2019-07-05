<template>
  <b-container>
    <b-row>
      <b-col v-for="(genre,index) in genres" :key="index" sm="3">
        <router-link :to="'/genres/' + genre">{{ genre }}</router-link>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
import services from '@/genre-service';

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
      this.genres = response.data;
    }
  }
}
</script>
