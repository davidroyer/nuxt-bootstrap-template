<template>
  <div>
    <h2>API Data</h2>

    <h3>Rivers</h3>
    <ul>
      <li v-for="river in rivers" :key="river.slug">
        <b-link :to="`rivers/${river.slug}`" v-text="river.title" />
      </li>
    </ul>
    <hr />
    <h3>Mountains</h3>
    <pre>{{ mountains }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const mountains = await $axios.$get('/mountains')
    const rivers = await $axios.$get('/rivers')
    return { mountains, rivers }
  },
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
