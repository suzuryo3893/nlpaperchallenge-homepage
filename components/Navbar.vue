<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <b-img
          thumbnail
          height="50"
          width="250"
          src="http://xpaperchallenge.org/cv/image/logo/cc_logo_2.png"
          class="d-inline-block align-top"
          fluid
          alt="Brand"
        />
        <!-- :src="require('~/static/image/logo/brand.svg')" -->
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <!--<b-nav-item to="/schedule" :active="isActive('/schedule')">Schedule</b-nav-item> -->
          <!-- <b-nav-item to="/members" :active="isActive('/members')">Members</b-nav-item> -->
          <!-- <b-nav-item to="/resources" :active="isActive('/resources')" class="mr-4">Resources</b-nav-item> -->
          <b-button href="http://xpaperchallenge.org/cv/" variant="primary main-button" target="_blank">
            <span>cvpaper.challenge</span>
            <font-awesome-icon icon="external-link-alt"/>
          </b-button>
        </b-navbar-nav>
      </b-collapse>

    </b-container>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$router.path == path;
    }
  }
};
</script>

<style>
.main-button {
  border-radius: 25px;
}
</style>
