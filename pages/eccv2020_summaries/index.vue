<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">ECCV2020論文サマリ</div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <div class="mb-4">
        <b-pagination
          :value="1"
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
        :value="1"
        :total-rows="totalCount"
        :per-page="5"
        align="center"
        @change="handleChangePage">
      </b-pagination>
    </b-container>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
    <p class="text-center">
      <a href="./eccv2020_summaries/listall">全まとめ一覧</a>
    </p>
  </div>
</template>

<script>
import SummaryCard from "~/components/SummaryCard_eccv2020.vue";
import axios from "axios";

export default {
  components: {
    SummaryCard
  },
  asyncData() {
    let { content: summaries, meta: { totalCount } } = require(`~/static/data/eccv2020_summaries/page/1/list.json`);
    let header = require(`./header.json`);
    return {
      summaries,
      totalCount,
      isLoading: false,
      header
    }
  },
  methods: {
    handleChangePage(page) {
      this.$router.push(`/eccv2020_summaries/page/${page}`);
    }
  },
  head() {
    return this.header;
  },
};
</script>
