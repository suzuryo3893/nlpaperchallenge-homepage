<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">CVPR2019論文サマリ</div>
        </b-container>
      </template>
      <template slot="lead">
        <b-container>
          <div class="text-center">tag: {{ tag }}</div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <div class="mb-4">
        <b-pagination
          v-model="page"
          :total-rows="totalCount"
          :per-page="5"
          align="center">
        </b-pagination>
      </div>
      <div class="mb-4" v-for="(summary, idx) in summaryByPage" :key="idx">
        <summary-card :summary="summary"/>
      </div>
      <div class="mb-4">
        <b-pagination
          v-model="page"
          :total-rows="totalCount"
          :per-page="5"
          align="center">
        </b-pagination>
      </div>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
import SummaryCard from "~/components/SummaryCard_cvpr2019.vue";
import axios from "axios";

export default {
  components: {
    SummaryCard
  },
  async asyncData({ params }) {
    let tag = params.tag;
    let { content: summaries, meta: { totalCount } } = require(`~/static/data/cvpr2019_summaries/tag/${tag}/list.json`);
    let header = require(`../header.json`);
    return {
      summaries,
      tag,
      page: 1,
      totalCount,
      isLoading: false,
      header
    }
  },
  computed: {
    summaryByPage() {
      let start = (this.page - 1) * 5;
      let end = (this.page - 1) * 5 + 5;
      return this.summaries.slice(start, end);
    }
  },
  head() {
    return this.header;
  },
};
</script>
