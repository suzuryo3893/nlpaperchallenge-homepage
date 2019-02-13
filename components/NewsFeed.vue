<template>
  <div>
    <h2>What's New</h2>
    <b-list-group class="mt-4">
      <b-list-group-item
        v-for="(event, idx) in latestEvents"
        :key="idx"
        :href="event.url"
        target="_blank"
      >
        <b-row>
          <b-col cols="4" md="2" class="text-right">{{ event.date }}</b-col>
          <b-col>{{ event.title }}</b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    events: Array
  },

  computed: {
    latestEvents() {
      return [...this.events].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
  }
};
</script>
