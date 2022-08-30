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
  data() {
    return {
      websiteOrigin: 'https://imLinguin.vercel.app',
    }
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        { description: this.page.description },
        { property: 'og:title', content: this.page.title },
        { property: 'og:description', content: this.page.description },
        {
          property: 'og:url',
          content: `${this.websiteUrl}`,
        },
        {
          property: 'twitter:title',
          content: this.page.title,
        },
        {
          property: 'twitter:url',
          content: `${this.websiteUrl}`,
        },
        ...(this.page.image
          ? [
              {
                property: 'og:image',
                content: `${this.websiteOrigin}${this.page.image}`,
              },
              {
                property: 'twitter:image',
                content: `${this.websiteOrigin}${this.page.image}`,
              },
              {
                property: 'image_url',
                content: `${this.websiteOrigin}${this.page.image}`,
              },
            ]
          : []),
      ],
    }
  },
  computed: {
    createdAt() {
      return new Date(this.page.createdAt).toLocaleDateString()
    },
    websiteUrl() {
      return `${this.websiteOrigin}${this.$route.path}`
    },
  },
}
</script>

<style lang="scss" scoped>
.root {
  padding-bottom: 10vh;
}
</style>
