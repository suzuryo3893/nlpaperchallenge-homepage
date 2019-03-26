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
    this.$axios
      .$get(
        "https://script.google.com/macros/s/AKfycbyAM3WEpk_cqU9SfZ9tFSs3yw-Y1ls-RyXeMPzqoCWcAuRADbu1/exec?entity=resources"
      )
      .then(res => {
        this.resources = res;
      });
  }
};
</script>
