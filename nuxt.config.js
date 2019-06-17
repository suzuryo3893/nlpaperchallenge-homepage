const pkg = require('./package')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'cvpaper.challenge - コンピュータビジョン分野の今を映し、創り出す挑戦',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'keywords',
        content:
          'cvpaper.challenge, cv, computer vision, paper, challenge'
      },
      {
        name: 'description',
        content: 'コンピュータビジョン分野の今を映し、創り出す挑戦を行うコミュニティcvpaper.challenge公式ホームページです。'
      },
      {
        name: 'author',
        content: 'cvpaper.challenge'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'cvpaper.challenge'
      },
      {
        property: 'og:title',
        content: 'cvpaper.challenge - コンピュータビジョン分野の今を映し、創り出す挑戦'
      },
      {
        property: 'og:description',
        content: 'コンピュータビジョン分野の今を映し、創り出す挑戦を行うコミュニティcvpaper.challenge公式ホームページです。'
      },
      {
        property: 'og:image',
        content: 'http://xpaperchallenge.org/cv/image/logo/cc_logo_1_crop.png'
      },
      {
        property: 'og:url',
        content: 'http://xpaperchallenge.org/cv'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/cv/survey/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    //'timeline-vuejs/dist/timeline-vuejs.css'
  ],

  script: [
    {
      src: "@/assets/js/slider_cvpaperchallenge.js",
      type: "text/javascript"
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    '@nuxtjs/axios',
    '~/modules/fetchData',
    '~/modules/fetchData_cvpr2019'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  router: {
    base: '/cv/survey/'
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  axios: {
    baseURL: process.env.API_HOST || 'http://localhost/api'
  },

  generate: {
    routes: function() {
      let routes = [];
      
      //
      const tags = require('./static/data/summaries/tags.json').content;
      const allSummaries = require('./static/data/summaries/all.json').content;
      const perPage = 5;
      const numPage = Math.ceil(allSummaries.length / perPage);

      for (let tag of tags) {
        routes.push(`/summaries/tag/${tag}`);
      }
      for (let i=1; i <= allSummaries.length; i++) {
        routes.push(`/summaries/${i}`);
      }
      for (let page=1; page <= numPage; page++) {
        routes.push(`/summaries/page/${page}`);
      }

      //
      const cvpr2019_tags = require('./static/data/cvpr2019_summaries/tags.json').content;
      const cvpr2019_allSummaries = require('./static/data/cvpr2019_summaries/all.json').content;
      const cvpr2019_perPage = 5;
      const cvpr2019_numPage = Math.ceil(cvpr2019_allSummaries.length / cvpr2019_perPage);

      for (let tag of cvpr2019_tags) {
        routes.push(`/cvpr2019_summaries/tag/${tag}`);
      }
      for (let i=1; i <= cvpr2019_allSummaries.length; i++) {
        routes.push(`/cvpr2019_summaries/${i}`);
      }
      for (let page=1; page <= cvpr2019_numPage; page++) {
        routes.push(`/cvpr2019_summaries/page/${page}`);
      }

      return routes;
    }
  }
}
