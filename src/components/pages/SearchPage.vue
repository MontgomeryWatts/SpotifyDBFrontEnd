<template>
    <b-container>
      <b-tabs>
        <artist-search-tab/>
        <album-search-tab/>
      </b-tabs>
    </b-container>
</template>

<script>
import ArtistSearchTab from './tabs/ArtistSearchTab';
import AlbumSearchTab from './tabs/AlbumSearchTab';

export default {
  name: 'SearchPage',
  components: {
    ArtistSearchTab,
    AlbumSearchTab
  }
}
</script>
