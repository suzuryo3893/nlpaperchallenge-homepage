<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">CVPR2020論文サマリ</div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container v-if="!isLoading">
      <div class="mb-4">
        <!--
        <b-pagination
          :value="1"
          :total-rows="totalCount"
          :per-page="5"
          align="center"
          @change="handleChangePage">
        </b-pagination>
        -->
      </div>
      <div class="mb-4" v-for="(summary, idx) in summaries" :key="idx">
        <summary-card :summary="summary"/>
      </div>
      <!--
      <b-pagination
        :value="1"
        :total-rows="totalCount"
        :per-page="5"
        align="center"
        @change="handleChangePage">
      </b-pagination>
      -->
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
  asyncData() {
    let { content: summaries } = require(`~/static/data/cvpr2020_summaries/all.json`);
    let header = require(`./header.json`);
    return {
      summaries,
      isLoading: false,
      header
    }
  },
  head() {
    var header_t=Object.assign({},this.header);
    header_t['title']+="（一覧）"
    header_t['og:title']+="（一覧）"
    return header_t;
  },
};
</script>
