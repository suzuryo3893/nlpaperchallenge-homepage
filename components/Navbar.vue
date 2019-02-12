<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <b-img
          thumbnail
          width="30"
          height="30"
          :src="require('~/static/image/logo/logo.jpg')"
          class="d-inline-block align-top"
          fluid
          alt="Responsive image"
        />
        <span>nlpaper.challenge</span>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/schedule" :active="isActive('/schedule')">Schedule</b-nav-item>
          <b-nav-item to="/members" :active="isActive('/members')">Members</b-nav-item>
          <b-nav-item to="/resources" :active="isActive('/resources')">Resources</b-nav-item>
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
