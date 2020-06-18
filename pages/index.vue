<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">
            <b-img fluid :src="require('~/static/image/logo/cc_logo_1_trim.png')" width="400"/>
          </div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">画像処理分野の国際会議の完全読破を目指しています。</div>
        </b-container>
      </template>

    </b-jumbotron>

    <b-container>
      <!-- <b-row>
        <b-col>
          <b-card-group deck>
            <b-card
              title="CVPR2019"
              sub-title="CVPR2019"
              :img-src="require('~/static/image/card/resources.jpg')"
              img-alt="CVPR2019"
              img-top
              class="with-shadow"
            >
              <nuxt-link to="/cvpr2019_summaries" class="btn stretched-link"></nuxt-link>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row> -->

      <!-- <b-row class="mt-5">
        <b-col cols="12">
          <news-feed :events="events" :isLoading="isLoading"/>
        </b-col>
      </b-row> -->

      <b-row class="mt-5">
        <b-col cols="12">
          <proceedings-card :procs="procs" :isLoading="isLoading"/>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
// import NewsFeed from "~/components/NewsFeed.vue";
// import axios from "axios";

// export default {
//   components: {
//     NewsFeed
//   },
//   asyncData() {
//     let events = require('~/static/data/events.json').content;
//     return {
//       events,
//       isLoading: false
//     }
//   }
// };

import ProceedingsCard from "~/components/ProceedingsCard.vue";
import axios from "axios";

export default {
  components: {
    ProceedingsCard
  },
  async asyncData() {
    //let events = require('~/static/data/events.json').content;
    let procs = [
      {
        'title' : 'CVPR2019',
        'url' : 'cvpr2019_summaries/',
        'date' : new Date('June 16, 2019'),
      },
      {
        'title' : 'ICCV2019',
        'url' : 'iccv2019_summaries/',
        'date' : new Date('November 1, 2019'),
      },
      {
        'title' : 'CVPR2020',
        'url' : 'cvpr2020_summaries/',
        'date' : new Date('June 14, 2020'),
      },
    ];
    return {
      procs,
      isLoading: false
    }
  }
};

</script>

<style>
.main-button {
  border-radius: 25px;
}
</style>
