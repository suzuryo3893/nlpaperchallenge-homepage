<template>
  <div>
    <b-jumbotron>
      <template slot="header">
        <b-container>
          <div class="text-center">Members</div>
        </b-container>
      </template>

      <template slot="lead">
        <b-container>
          <div class="text-center">参加者。</div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <b-row>
        <b-col>
          <b-card class="with-shadow">
            <b-media>
              <b-img slot="aside" blank blank-color="#ccc" width="100" alt="placeholder"/>
              <h5 class="mt-0">Miura Yasuhide</h5>
              <p>電通国際情報サービス</p>
              <nuxt-link to="/resources" class="btn stretched-link"></nuxt-link>
            </b-media>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="with-shadow">
            <b-media>
              <b-img slot="aside" blank blank-color="#ccc" width="100" alt="placeholder"/>
              <h5 class="mt-0">Faisal Hadiputra</h5>
              <p>電通国際情報サービス</p>
              <nuxt-link to="/resources" class="btn stretched-link"></nuxt-link>
            </b-media>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-card class="with-shadow">
            <b-media>
              <b-img slot="aside" blank blank-color="#ccc" width="100" alt="placeholder"/>
              <h5 class="mt-0">Kataoka</h5>
              <nuxt-link to="/resources" class="btn stretched-link"></nuxt-link>
            </b-media>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
