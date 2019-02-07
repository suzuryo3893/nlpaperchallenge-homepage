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
      <b-row v-for="([ member1, member2 ], idx) in memberPairs" :key="idx" class="mb-4">
        <b-col>
          <b-card class="with-shadow">
            <b-media>
              <b-img slot="aside" :src="member1.image" width="100" height="100" alt="placeholder"/>
              <h5 class="mt-0">{{ member1.name }}</h5>
              <p>{{ member1.affiliation }}</p>
              <a :href="member1.url" class="btn stretched-link"></a>
            </b-media>
          </b-card>
        </b-col>
        <b-col v-if="member2">
          <b-card class="with-shadow">
            <b-media>
              <b-img slot="aside" :src="member2.image" width="100" height="100" alt="placeholder"/>
              <h5 class="mt-0">{{ member2.name }}</h5>
              <p>{{ member2.affiliation }}</p>
              <a :href="member2.url" class="btn stretched-link"></a>
            </b-media>
          </b-card>
        </b-col>
        <b-col v-else></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: []
    };
  },
  computed: {
    memberPairs() {
      return this.members.reduce((prev, curr) => {
        if (prev.length == 0) {
          return [[curr]];
        } else {
          if (prev.slice(-1)[0].length == 1) {
            return [
              ...prev.slice(0, prev.length - 1),
              [...prev.slice(-1)[0], curr]
            ];
          } else {
            return [...prev, [curr]];
          }
        }
      }, []);
    }
  },
  mounted() {
    this.$axios.$get("/nlp/data/members.json").then(res => {
      this.members = res;
    });
  }
};
</script>

