<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">論文サマリ</div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <div class="mb-4">
        <b-pagination
          :value="page"
          :total-rows="totalCount"
          :per-page="5"
          align="center"
          @change="handleChangePage">
        </b-pagination>
      </div>
      <div class="mb-4" v-for="(summary, idx) in summaries" :key="idx">
        <summary-card :summary="summary"/>
      </div>
      <b-pagination
        :value="page"
        :total-rows="totalCount"
        :per-page="5"
        align="center"
        @change="handleChangePage">
      </b-pagination>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import SummaryCard from "~/components/SummaryCard_cvpr2020.vue";
import axios from "axios";

export default {
  components: {
    SummaryCard
  },
  async asyncData({ params }) {
    let page = parseInt(params.page);
    let { content: summaries, meta: { totalCount } } = require(`~/static/data/cvpr2020_summaries/page/${page}/list.json`);
    let header = require(`../header.json`);
    return {
      summaries,
      page,
      totalCount,
      isLoading: false,
      header
    }
  },
  methods: {
    handleChangePage(page) {
      this.$router.push(`/cvpr2020_summaries/page/${page}`);
    }
  },
  head() {
    return this.header;
  },
};
</script>
