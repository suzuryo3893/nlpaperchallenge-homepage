<template>
  <div>
    <h2>What's New</h2>
    <b-list-group v-if="!isLoading" class="mt-4">
      <b-list-group-item
        v-for="(event, idx) in latestEvents"
        :key="idx"
        :href="event.url"
        target="_blank"
      >
        <b-row>
          <b-col
            cols="4"
            md="2"
            class="text-right"
          >{{ new Date(event.date).toLocaleDateString('ja-JP') }}</b-col>
          <b-col>{{ event.title }}</b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <p v-else class="text-center">
      <font-awesome-icon class="mr-5" :icon="['fas', 'spinner']" pulse size="2x"/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    events: Array,
    isLoading: Boolean
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
