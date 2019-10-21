<template>
  <div>
    <h2>Proceedings</h2>
    <b-list-group v-if="!isLoading" class="mt-4">
      <b-list-group-item
        v-for="(proc, idx) in latestProcs"
        :key="idx"
        :href="proc.url"
        target="_blank"
      >
        <b-row>
          <b-col
            cols="4"
            md="2"
            class="text-right"
          >{{ proc.date.toLocaleDateString('ja-JP') }}</b-col>
          <b-col>{{ proc.title }}</b-col>
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
    procs: Array,
    isLoading: Boolean
  },

  computed: {
    latestProcs() {
      return [...this.procs].sort(
        (a, b) => b.date - a.date
      );
    }
  }
};
</script>
