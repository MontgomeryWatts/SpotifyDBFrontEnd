<template>
  <div>
      <b-navbar toggleable="sm" fixed="top" variant="dark" type="dark">
          <b-navbar-brand to="/">SpotifyDB</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/playlist">Create Playlist</b-nav-item>

                <b-nav-item-dropdown text="Discover">
                  <b-dropdown-item to="/artists/random">Go to Random Artist</b-dropdown-item>
                  <b-dropdown-item to="/artists">Get Random Artists</b-dropdown-item>
                  <b-dropdown-item to="/genres">View Genres</b-dropdown-item>   
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-input-group>
                    <b-form-input v-model="query" placeholder="Search Artist"></b-form-input>
                    <b-input-group-append>
                      <b-button type="submit">Search</b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-nav-form>

                <b-nav-item to="/search">Advanced Search</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data: function() {
      return {
        query: '',
        names: []
      }
    }
}
</script>
