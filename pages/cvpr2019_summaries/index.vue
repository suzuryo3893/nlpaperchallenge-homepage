<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">CVPR2019論文サマリ</div>
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
  </div>
</template>

<script>
import SummaryCard from "~/components/SummaryCard.vue";
import axios from "axios";

export default {
  components: {
    SummaryCard
  },
  asyncData() {
    let { content: summaries, meta: { totalCount } } = require(`~/static/data/cvpr2019_summaries/page/1/list.json`);
    return {
      summaries,
      totalCount,
      isLoading: false
    }
  },
  methods: {
    handleChangePage(page) {
      this.$router.push(`/cvpr2019_summaries/page/${page}`);
    }
  }
};
</script>
