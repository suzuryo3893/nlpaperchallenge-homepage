<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/nlp/">
          <b-img
            thumbnail
            width="30"
            height="30"
            src="/nlp/image/logo/logo.jpg"
            class="d-inline-block align-top"
            fluid
            alt="Responsive image"
          />
          <span>nlpaper.challenge</span>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Schedule</b-nav-item>
            <b-nav-item href="#">Members</b-nav-item>
            <b-nav-item href="#">Resources</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-jumbotron>
      <template slot="header">
        <b-container>
          <div class="text-center">nlpaper.challenge</div>
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
          <b-button class="main-button" href="#recruit" size="lg" variant="info">
            <span>メンバー登録</span>
            <font-awesome-icon icon="angle-right"/>
          </b-button>
        </div>
      </b-container>
    </b-jumbotron>

    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card-group deck>
            <b-card
              title="Schedule"
              img-src="/nlp/image/card/schedule.jpg"
              img-alt="schedule"
              img-top
            >
              <p class="card-text">
                This is a wider card with supporting text below as a
                natural lead-in to additional content. This content
                is a little bit longer.
              </p>
            </b-card>
            <b-card title="Members" img-src="/nlp/image/card/members.jpg" img-alt="members" img-top>
              <p class="card-text">
                This is a wider card with supporting text below as a
                natural lead-in to additional content. This content
                is a little bit longer.
              </p>
            </b-card>
            <b-card
              title="Resources"
              img-src="/nlp/image/card/resources.jpg"
              img-alt="resources"
              img-top
            >
              <p class="card-text">
                This is a wider card with supporting text below as a
                natural lead-in to additional content. This content
                is a little bit longer.
              </p>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>

      <b-row></b-row>

      <b-row class="mt-5">
        <b-col cols="12">
          <h2>What's New</h2>

          <b-list-group class="mt-4">
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>

    <footer class="bd-footer">
      <b-container>
        <div class="text-center">Hello</div>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-button {
  border-radius: 25px;
}
</style>
