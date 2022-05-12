<template>
  <div class="root markdown">
    <div class="container">
      <h1>imLinguin Blog</h1>
      <p>Posts:</p>
      <ul>
        <li v-for="blog in page" :key="blog.slug + 'page'">
          <nuxt-link :to="blog.path">{{ blog.title }}</nuxt-link>
          <span class="small">{{ getLocaleString(blog.createdAt) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLanding',
  async asyncData({ $content }) {
    return { page: await $content('blog').fetch() }
  },
  head: {
    title: 'Blog',
  },
  methods: {
    getLocaleString(date) {
      return new Date(date).toLocaleDateString()
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  line-height: 0.5em;
}
</style>
