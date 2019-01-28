<template>
  <b-container>
    <header id="header">
      <b-row>
        <!-- Top left logo of nlpaper.challenge -->
        <b-col cols="6">
          <a href="/nlp/" target="_self">
            <img
              src="/nlp/image/logo/cc_logo_2.png"
              style="margin-top: 5px; width:100%; height:auto; max-height:100px; max-width:525px;"
            >
          </a>
        </b-col>

        <!-- Top right icon of twitter and git -->
        <b-col cols="3" offset="3">
          <nav>
            <div class="icon">
              <a href="https://twitter.com/NLpaperChalleng">
                <img src="/nlp/image/icon/twitter_g.png">
              </a>
            </div>
            <div class="icon">
              <a href="/nlp/">
                <img src="/nlp/image/icon/github_g.png">
              </a>
            </div>
            <div class="icon">
              <a href="https://www.slideshare.net/cvpaperchallenge/">
                <img src="/nlp/image/icon/shareslide_g.png">
              </a>
            </div>
          </nav>
        </b-col>
      </b-row>
      <!-- End row -->
    </header>
    <!-- End header -->
    <!-- Start Main -->
    <article id="main">
      <!-- Start Carousel -->
      <b-row>
        <b-carousel id="carouselSlider" indicators controls :interval="4000">
          <b-carousel-slide
            img-src="http://xpaperchallenge.org/cv/image/projects/cvpaper_challenge.png"
          />
          <b-carousel-slide
            img-src="http://xpaperchallenge.org/cv/image/projects/auto_peper_summary_gen.png"
          />
        </b-carousel>
      </b-row>
      <!-- End Carousel -->
      <!-- Start Menu Bar -->
      <b-row>
        <b-col cols="12">
          <nav>
            <hr size="2" align="left">
            <b-button-group>
              <b-button variant="link" href="#new">News</b-button>
              <b-button variant="link" href="#study-group">Study Group</b-button>
              <b-button variant="link" href="#member">Members</b-button>
              <b-button variant="link" href="#slides">Slides</b-button>
              <b-button variant="link" href="#recruit">Recruit</b-button>
              <b-button variant="link" href="#links">Links</b-button>
              <b-button variant="link" href="#contact">Contact</b-button>
            </b-button-group>
            <hr size="2" align="left">
          </nav>
        </b-col>
      </b-row>
      <!-- End Menu Bar -->
      <!-- Start What's New -->
      <section id="new">
        <h2 class="section_name">What's new?</h2>

        <div class="newsitem">
          <div class="newsdate">2019.01.18</div>
          <div class="newstext">nlpaper.challenge 2019 開始</div>
        </div>
      </section>
      <!-- End What's New -->
      <!-- Start nlpaper.challenge-->
      <section>
        <h2 class="section_name">nlpaper.challenge</h2>
        <p>コンピュータビジョン分野の今を映し、創り出す挑戦です。論文読破・まとめ・アイディア考案・議論・実装・論文執筆（・社会実装）に至るまで広く取り組み、あらゆる知識を共有しています。</p>
        <p>2015年5月のスタート以来、現在までにCVPR論文を完全読破するなど年間1,000本以上、累計では約2,500本（2019年1月現在）の論文をまとめています。学生を中心に論文投稿してトップ国際会議のCVPR/ICRAなどにも採択されるまでになりました。</p>
        <p>2019年は (i) トップ国際会議/学術論文誌に30本以上投稿する、(ii) 2つ以上のトップ国際会議に対して網羅的サーベイを行う 。cvpaper.challengeでは学生・技術者・研究者を問わず、論文を読んでくれる方、ブレストに参加してくれる方、論文を一緒に書いてくれる方を常時募集しています。日本のCVを強くする取り組みを強化して行きたいので、是非一緒にチャレンジしましょう！</p>
      </section>
      <!-- End nlpaper.challenge -->
    </article>
    <!-- End Main -->
  </b-container>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },

  mounted() {}
};
</script>

<style>
.icon {
  float: right;
  margin-top: 25px;
  width: 65px;
  text-align: center;
  display: inline-block;
}
.icon img {
  margin-right: auto;
  margin-left: auto;
  height: 50px;
  display: block;
}

.menubar {
  font-family: "acumin-pro", "source-han-sans-japanese", sans-serif;
  font-weight: 500;
  font-size: 26px;
  /* color: #18273E; */
  margin-top: 10px;
  padding-bottom: 3px;
  margin-bottom: 10px;
}
.menubar a {
  margin-left: 10px;
  margin-right: 10px;
}

.carousel-caption {
  top: 0px;
  bottom: auto;
  /* top: 250px; */
  color: black !important;
}

.carousel-indicators {
  top: 275px;
}

.footer {
  text-align: center;
  font-size: 9pt;
  color: #999;
}

.section_name {
  color: #de382d;
}

.paragraph {
  font-size: 9pt;
}
</style>
