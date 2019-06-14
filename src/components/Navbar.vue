<template>
  <div>
      <b-navbar toggleable="sm" fixed="top" variant="dark" type="dark">
          <b-navbar-brand href="/">SpotifyDB</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/playlist">Create Playlist</b-nav-item>
                <b-nav-item-dropdown text="Discover">
                  <b-dropdown-item href="/artists">Get Random Artists</b-dropdown-item>
                  <b-dropdown-item href="/artists/random">Go to Random Artists</b-dropdown-item>
                  <b-dropdown-item href="/genres">Genres</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search Artist"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
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