export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=',
      link: [
        {
          rel: 'me',
          href: 'https://fosstodon.org/@imLinguin'
        }
      ]
    }
  },
  css: ['~/assets/scss/main.scss', '~/assets/scss/markdown.scss'],
  modules: ['@nuxt/content'],
})
