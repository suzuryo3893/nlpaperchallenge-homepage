<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Resources</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">スライド、書籍など。</div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <div class="mb-4" v-for="(resource, idx) in resources" :key="idx">
        <resource-card :resource="resource"/>
      </div>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import ResourceCard from "~/components/ResourceCard.vue";
import axios from "axios";

export default {
  components: {
    ResourceCard
  },
  asyncData() {
    let resources = require('~/static/data/resources.json').content;
    return {
      resources,
      isLoading: false
    }
  }
};
</script>
