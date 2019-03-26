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

export default {
  components: {
    ResourceCard
  },
  data() {
    return {
      resources: [],
      isLoading: false
    };
  },
  mounted() {
    this.isLoading = true;
    this.$axios
      .$get(
        "https://script.google.com/macros/s/AKfycbyAM3WEpk_cqU9SfZ9tFSs3yw-Y1ls-RyXeMPzqoCWcAuRADbu1/exec?entity=resources"
      )
      .then(res => {
        this.isLoading = false;
        this.resources = res;
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      });
  }
};
</script>
