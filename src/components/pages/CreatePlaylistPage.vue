<template>
  <b-container>
    <b-card> 
      <b-card-body>
        <b-form>
          <b-input-group>
            <b-form-input placeholder="Artist Name" v-model="name"></b-form-input>
            <b-input-group-append>
              <b-button 
                @click="addName"
                :disabled="name === ''"
              >Add</b-button>
            </b-input-group-append>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input placeholder="Genre" v-model="genre "></b-form-input>
            <b-input-group-append>
              <b-button 
                @click="addGenre"
                :disabled="genre === ''"
              >Add</b-button>
            </b-input-group-append>
          </b-input-group>

          <b-input-group
            prepend="Duration"
            :append="durationString"
            class="mt-3"
          >
            <b-form-input type="range" min="15" max="120" v-model="duration"></b-form-input>
          </b-input-group>
        </b-form>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'CreatePlaylistPage',
  data () {
    return {
      name: '',
      genre: '',
      names: [],
      genres: [],
      duration: 60
    }
  },
  methods: {
    addName() {
      this.names.push(this.name);
      this.name = '';
    },
    addGenre() {
      this.genres.push(this.genre);
      this.genre = '';
    }
  },
  computed : {
    durationString: function () {
      return Math.floor(this.duration / 60) + "h " + this.duration % 60 + "m"
    }
  }
}
</script>
