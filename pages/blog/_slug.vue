<template>
  <div class="root markdown">
    <div class="container">
      <h1>{{ page.title }}</h1>
      <nuxt-link to="/blog" class="small">Back</nuxt-link>
      <span class="small">{{ createdAt }}</span>
      <nuxt-content class="md-content" :document="page"></nuxt-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content, route }) {
    return {
      page: await $content(`blog/${route.params.slug}`).fetch(),
    }
  },

  head() {
    return {
      title: this.page.title,
      meta: [{ description: this.page.description }],
    }
  },

  computed: {
    createdAt() {
      return new Date(this.page.createdAt).toLocaleDateString()
    },
  },
}
</script>

<style lang="scss" scoped></style>
