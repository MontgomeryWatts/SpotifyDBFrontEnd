<template>
  <b-container>
    <b-form>
      <b-input-group>
        <b-form-input type="range" min="15" max="120" v-model="duration"></b-form-input>
        <p> {{ durationString }}</p>
      </b-input-group>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: 'CreatePlaylistPage',
  data () {
    return {
      duration: 60
    }
  },
  computed : {
    durationString: function () {
      return Math.floor(this.duration / 60) + "h " + this.duration % 60 + "m"
    }
  }
}
</script>
