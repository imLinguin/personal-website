export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  css: ['~/assets/scss/main.scss', '~/assets/scss/markdown.scss'],
  modules: ['@nuxt/content'],
})
