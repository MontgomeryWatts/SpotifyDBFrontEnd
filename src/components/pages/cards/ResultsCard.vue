<template>
  <b-card
    :img-src="imageUrl"
    img-left
    :href="externalLink"
  >
    
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