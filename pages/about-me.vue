<template>
  <div class="root markdown">
    <div class="container">
      <h1 @click="linkId('#')">About me</h1>
      <p>
        I'm a software developer from Poland. I'm a Linux
        enthusiast who tries to make <code>Linux Gaming</code> accesible to more
        people. Contributor of
        <a href="https://heroicgameslauncher.com">Heroic Games Launcher</a>
      </p>

      <h2 @click="linkId('#technologies-and-languages')">
        Technologies and languages I'm familiar with
      </h2>
      <ul class="technologies">
        <li v-for="technology in technologies" :key="technology.name">
          {{ technology.name }}
          <a :href="technology.link" rel="noreferer noopener" target="_blank"
            ><img :src="technology.icon"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      age: new Date().getFullYear() - 2004,
    }
  },
  head: {
    title: 'About',
  },
  computed: {
    technologies() {
      return [
        {
          name: 'React',
          icon: 'technologies/react.svg',
          link: 'https://reactjs.org',
        },
        {
          name: 'React Native',
          icon: 'technologies/react.svg',
          link: 'https://reactnative.dev',
        },
        {
          name: 'Nuxt',
          icon: 'technologies/nuxt.svg',
          link: 'https://nuxtjs.org',
        },
        {
          name: 'Vue',
          icon: 'technologies/vue.svg',
          link: 'https://vuejs.org',
        },
        {
          name: 'TypeScript',
          icon: 'technologies/typescript.svg',
          link: 'https://typescriptlang.org',
        },
        {
          name: 'Python',
          icon: 'technologies/python.svg',
          link: 'https://python.org',
        },
        {
          name: 'Electron',
          icon: 'technologies/electron.svg',
          link: 'https://electronjs.org',
        },
      ].sort((a, b) => a.name.localeCompare(b.name))
    },
  },
  methods: {
    linkId(id) {
      window.location.href = id
    },
  },
}
</script>

<style lang="scss" scoped>
div.root {
  li {
    display: flex;
    align-items: center;
    padding: 10px;

    a {
      height: 1.5em;
      margin-left: 15px;
      img {
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  div.about-content {
    font-size: 6vw;
  }
}
</style>
