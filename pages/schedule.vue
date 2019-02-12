<template>
  <div>
    <b-jumbotron>
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
        <b-col cols="8" offset="2">
          <b-table bordered :items="items" :fields="fields"></b-table>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  components: {
    Timeline
  },
  data() {
    return {
      fields: [
        { key: "time", label: "日程", class: "text-center" },
        { key: "title", label: "予定" }
      ],
      items: [
        {
          time: "2019年1月 ～ 2019年2月",
          title: 'NLP/CV交流勉強会',
        },
        {
          time: "2019年3月 ～ 2019年4月",
          title: 'NLP x CV先端勉強会',
        },
        {
          time: "2019年5月 ～ 2019年8月",
          title: 'ACL完全読破チャレンジ',
        },
        {
          time: "2019年8月",
          title: 'YANS(言語処理若手の会-シンポジウム-)に乗り込む',
        },
        {
          time: "2019年9月",
          title: 'CVPAPER/NLPAPER CHALLENGE読破報告会',
        },
        {
          time: "2020年2月",
          title: 'ACL2020へ投稿 !',
        }
      ]
    }
  }
}
</script>

<style>
</style>
