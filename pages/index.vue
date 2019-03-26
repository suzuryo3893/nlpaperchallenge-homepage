<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">
            <b-img fluid :src="require('~/static/image/logo/title.svg')" width="400"/>
          </div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">自然言語処理の国際会議「ACL」の完全読破を目指しています。</div>
          <div class="text-center">自然言語処理の発展のため、勉強会や交流会を企画していきます。</div>
        </b-container>
      </template>

      <b-container>
        <hr class="my-4">

        <div class="text-center">
          <b-button class="main-button" to="/members" size="lg" variant="info">
            <span>メンバー登録</span>
            <font-awesome-icon icon="angle-right"/>
          </b-button>
        </div>
      </b-container>
    </b-jumbotron>

    <b-container>
      <b-row>
        <b-col>
          <b-card-group deck>
            <b-card
              title="Schedule"
              sub-title="nlpaper.challengeの全体流れ"
              :img-src="require('~/static/image/card/schedule.jpg')"
              img-alt="schedule"
              img-top
              class="with-shadow"
            >
              <nuxt-link to="/schedule" class="btn stretched-link"></nuxt-link>
            </b-card>
            <b-card
              title="Members"
              sub-title="nlpaper.challengeの参加者"
              :img-src="require('~/static/image/card/members.jpg')"
              img-alt="members"
              img-top
              class="with-shadow"
            >
              <nuxt-link to="/members" class="btn stretched-link"></nuxt-link>
            </b-card>
            <b-card
              title="Resources"
              sub-title="スライド、書籍など"
              :img-src="require('~/static/image/card/resources.jpg')"
              img-alt="resources"
              img-top
              class="with-shadow"
            >
              <nuxt-link to="/resources" class="btn stretched-link"></nuxt-link>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col cols="12">
          <news-feed :events="events" :isLoading="isLoading"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NewsFeed from "~/components/NewsFeed.vue";
export default {
  components: {
    NewsFeed
  },
  data() {
    return {
      events: [],
      isLoading: false
    };
  },
  mounted() {
    this.isLoading = true;
    this.$axios
      .$get(
        "https://script.google.com/macros/s/AKfycbyAM3WEpk_cqU9SfZ9tFSs3yw-Y1ls-RyXeMPzqoCWcAuRADbu1/exec?entity=events"
      )
      .then(res => {
        this.isLoading = false;
        this.events = res;
      })
      .catch(err => {
        this.isLoading = false;
        console.log(err);
      });
  }
};
</script>

<style>
.main-button {
  border-radius: 25px;
}
</style>
