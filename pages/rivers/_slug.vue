<template>
  <div>
    <h2 v-text="river.title" />
    <img :src="river.image" :alt="`Image of the ${river.title}`" />
    <p v-text="river.description" />

    <hr />
    <pre>{{ river }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const river = await $axios.$get(`/rivers/${params.slug}`)
    return { river }
  },
}
</script>

<style></style>
