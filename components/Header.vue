<template>
  <header>
    <div class="name-header">
      <p>Paweł Lidwin</p>
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
}
</script>

<style lang="scss" scoped>
div.name-header {
  height: 45px;
  width: 100vw;
  text-align: center;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  color: white;
  font-weight: bold;
  p {
    opacity: 0.6;
  }
}

nav {
  background-color: var(--lighter-dark);
  height: 45px;
  display: flex;
  flex-direction: row;
}
</style>
