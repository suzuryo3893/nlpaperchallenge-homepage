<template>
  <div>
    <b-container v-if="!isLoading">
      <b-pagination
        class="pagination-top"
        :per-page="1"
        :value="summary.id"
        :total-rows="totalCount"
        align="center"
        @change="handleChange"
      />
      <div class="article-inner">
        <div class="article-header">
          <b-row>
            <b-col>
              <div class="article-id">
                #{{ summary.id }}
              </div>
            </b-col>
            <b-col>
              <div class="article-resumer">
                summarized by : {{ summary.resumer }}
              </div>
            </b-col>
          </b-row>
          <div class="article-title">
            <a :href="summary.link" target="_blank">
              {{ summary.title }}
              <font-awesome-icon class="mr-5" :icon="['fas', 'external-link-alt']" size="xs" />
            </a>
          </div>
          <div class="article-authors">
            {{ summary.authors.join(', ') }}
          </div>
        </div>
        <div class="article-entry">
          <b-row>
            <b-col cols="7">
              <h3 class="section-header"><b>概要</b></h3>
              <div class="section-content">{{ summary.overview }}</div>
            </b-col>
            <b-col class="text-center">
              <b-img
                class="section-image"
                slot="aside"
                :src="summary.image"
                width="300"
                height="200"
                alt="placeholder"
              />
            </b-col>
          </b-row>
          <h3 class="section-header">
            <b>新規性・結果・なぜ通ったか？</b>
          </h3>
          <div class="section-content">{{ summary.details }}</div>
        </div>
        <div class="article-footer">
          <ul class="article-tag-list">
            <li v-for="(tag, idx) in summary.tags" :key="idx" class="article-tag-list-item">
              <nuxt-link :to="`/summaries/tag/${tag}`" class="article-tag-list-link">
                {{ tag }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <b-pagination
        :per-page="1"
        :value="summary.id"
        :total-rows="totalCount"
        align="center"
        @change="handleChange"
      />
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
  asyncData({ params }) {
    let id = params.id;
    let { content: summary, meta: { totalCount } } = require(`~/static/data/summaries/id/${id}.json`);
    return {
      summary,
      totalCount,
      isLoading: false
    }
  },
  methods: {
    handleChange(page) {
      this.$router.push(`/summaries/${page}`)
    }
  }
};
</script>

<style>
.pagination-top {
  margin-top:20px;
}
.article-inner {
  margin-top: 20px;
  overflow: hidden;
  background: #fff;
  box-shadow: 1px 2px 3px #ddd;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}
.article-header {
  margin: 45px 45px 0;
  border-bottom: 1px solid #ddd;
}
.article-title {
  text-decoration: none;
  font-size: 2em;
  font-weight: bold;
  color: #555;
  line-height: 1em;
  margin: 0.5em 0;
  transition: color 0.2s;
}
.article-link {
  font-size: 1em;
  font-weight: 100;
}
.article-authors {
  padding-top: 0em;
  margin-bottom: 1em;
}
.article-resumer {
  text-align: right;
}
.article-entry {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #555;
  padding: 0 45px;
}
.section-header {
  margin: 20px 0 10px 0;
}
.section-image {
  margin-top: 20px;
}
.article-footer {
  font-size: 0.85em;
  line-height: 1.6em;
  border-top: 1px solid #ddd;
  padding-top: 1.6em;
  margin: 0 45px 45px;
}
.article-footer a {
  color: #999;
  text-decoration: none;
}
.article-footer a:hover {
  color: #777;
}
ol,ul {
  margin-top: 0px;
  margin-bottom: 1rem;
  margin-left: -40px;
  list-style: none;
}
.article-tag-list-item {
  float: left;
  margin-right: 10px;
}
.article-tag-list-link::before {
  content: "#";
}
</style>
