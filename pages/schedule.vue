<template>
  <div>
    <b-jumbotron header-level="4">
      <template slot="header">
        <b-container>
          <div class="text-center">Schedule</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">スケジュール。</div>
        </b-container>
      </template>
    </b-jumbotron>
    <div class="container">
      <b-row>
        <b-col lg="8" offset-lg="2">
          <b-table stacked='md' bordered :items="items" :fields="fields"></b-table>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<!--
<script>
import Timeline from 'timeline-vuejs';

export default {
  components: {
    Timeline
  },
  data() {
    return {
      fields: [
        { key: "time", label: "日程" },
        { key: "title", label: "予定" }
      ],
      items: [
        {
          time: "2019/01 ～ 2019/02",
          title: 'NLP/CV交流勉強会',
        },
        {
          time: "2019/03 ～ 2019/04",
          title: 'NLP x CV先端勉強会',
        },
        {
          time: "2019/05 ～ 2019/08",
          title: 'ACL完全読破チャレンジ',
        },
        {
          time: "2019/08",
          title: 'YANS(言語処理若手の会-シンポジウム-)に乗り込む',
        },
        {
          time: "2019/09",
          title: 'CVPAPER/NLPAPER CHALLENGE読破報告会',
        },
        {
          time: "2020/02",
          title: 'ACL2020へ投稿 !',
        }
      ]
    }
  }
}
</script>
-->

<style>
</style>
