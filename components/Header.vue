<template>
  <header>
    <div class="name-header">
      <p>Paweł Lidwin</p>
      <span>
        <div class="circle red" @click="close" />
        <div class="circle yellow" />
        <div class="circle green" @click="fullscreen" />
      </span>
    </div>
    <nav>
      <NavElement title="Home" route="/" />
      <NavElement title="About me" route="/about-me" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {
      isFullscreen: false,
    }
  },
  methods: {
    close: () => {
      close()
    },
    fullscreen() {
      this.isFullscreen
        ? document.exitFullscreen()
        : document.querySelector('body').requestFullscreen()

      this.isFullscreen = !this.isFullscreen
    },
  },
}
</script>

<style lang="scss" scoped>
div.name-header {
  height: 45px;
  width: 100vw;
  text-align: center;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--lighter-dark);
  color: white;
  font-weight: bold;
  p {
    opacity: 0.6;
  }
  span {
    position: absolute;
    left: 10px;
    display: flex;
    width: 50px;
    justify-content: space-between;
    flex-direction: row;
    div.circle {
      width: 12px;
      height: 12px;
      border-radius: 100%;
    }
    div.red {
      background: #fe6053;
    }
    div.yellow {
      background: #fdbd00;
    }
    div.green {
      background: #15cc38;
    }
  }
}

nav {
  background-color: var(--dark);
  height: 45px;
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  div.name-header span {
    display: none;
  }
}
</style>
