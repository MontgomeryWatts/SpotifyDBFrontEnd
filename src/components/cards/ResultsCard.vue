<template>
  <b-card
    no-body
    class="overflow-hidden"
  >
    <b-row
      no-gutters
    >
      <b-col
        cols="6"
      >
        <b-link
          :href="externalLink"
        >
          <b-card-img
            :src="imageUrl"
            class="result-img"
            fluid
            left
          ></b-card-img>
        </b-link>
      </b-col>

      <b-col
        cols="6"
      >
        <b-card-body>
          <b-link
            :to="internalLink"
          >
            <b-card-text>{{ text }}</b-card-text>
          </b-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'ResultsCard',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    internalLink: {
      type: String,
      required: true
    },
    externalLink: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>