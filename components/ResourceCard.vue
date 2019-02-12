<template>
  <b-card class="with-shadow">
    <b-media>
      <b-img
        v-if="resource.image"
        slot="aside"
        :src="resource.image"
        width="100"
        height="100"
        alt="placeholder"
      />
      <b-img
        v-else
        slot="aside"
        :src="require('~/static/image/avatar/resources.jpg')"
        width="100"
        height="100"
        alt="placeholder"
      />
      <h5 class="mt-0">{{ resource.title }}</h5>
      <span class="tag tag-primary" v-for="(tag, idx) in resource.tags" :key="idx">{{ tag }}</span>
      <a :href="resource.url" target="_blank" class="btn stretched-link"></a>
    </b-media>
  </b-card>
</template>

<script>
export default {
  props: {
    resource: Object
  }
};
</script>

<style>
.tag {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 5rem;
}
.tag-primary {
  background-color: #1dbba6;
}
</style>