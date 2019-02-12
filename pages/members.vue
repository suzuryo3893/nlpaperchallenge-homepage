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
          <div class="text-center">
            ご参加になりたい方は
            <a href="https://twitter.com/NlpaperChalleng" target="_blank">@NlpaperChalleng</a>へDMください。
          </div>
        </b-container>
      </template>
    </b-jumbotron>

    <b-container>
      <b-row v-for="([ member1, member2 ], idx) in memberPairs" :key="idx" class="mb-4">
        <b-col>
          <member-card :member="member1"/>
        </b-col>
        <b-col v-if="member2">
          <member-card :member="member2"/>
        </b-col>
        <b-col v-else></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MemberCard from "~/components/MemberCard.vue";

export default {
  components: {
    MemberCard
  },
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

