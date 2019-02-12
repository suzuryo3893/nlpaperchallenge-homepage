<template>
  <div>
    <b-jumbotron>
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

    <b-container>
      <div class="mb-4" v-for="(resource, idx) in resources" :key="idx">
        <resource-card :resource="resource"/>
      </div>
    </b-container>
  </div>
</template>

<script>
import ResourceCard from "~/components/ResourceCard.vue";

export default {
  components: {
    ResourceCard
  },
  data() {
    return {
      resources: []
    };
  },
  mounted() {
    this.$axios.$get("/nlp/data/resources.json").then(res => {
      this.resources = res;
    });
  }
};
</script>
