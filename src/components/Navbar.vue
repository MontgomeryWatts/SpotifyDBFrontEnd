<template>
  <div>
      <b-navbar toggleable="sm" fixed="top" variant="dark" type="dark">
          <b-link to="/">
            <b-navbar-brand>SpotifyDB</b-navbar-brand>
          </b-link>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <router-link to="/playlist">
                  <b-nav-item href="/playlist">Create Playlist</b-nav-item>
                </router-link>

                <b-nav-item-dropdown text="Discover">
                  <router-link to="/artists/random">
                    <b-dropdown-item href="/artists/random">Go to Random Artist</b-dropdown-item>
                  </router-link>

                  <router-link to="/artists">
                    <b-dropdown-item href="/artists">Get Random Artists</b-dropdown-item>
                  </router-link>

                  <router-link to="/genres">
                    <b-dropdown-item href="/genres">View Genres</b-dropdown-item>
                  </router-link>    
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search Artist"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <router-link to="/search">
                  <b-nav-item href="/search">Advanced Search</b-nav-item>
                </router-link>
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>