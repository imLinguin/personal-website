<template>
  <div>
    <div class="content">
      <div class="hello">
        <p id="i-am">Hi, I am</p>
        <p id="name">Paweł Lidwin</p>
        <p>
          <span id="known-as">known as</span> <span id="nickname">Linguin</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'default',
})
</script>

<style lang="scss" scoped>
div.content {
  background: var(--lighter-dark);
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  div.hello {
    padding-left: 228px;
    font-size: 56px;
    p#i-am {
      font-size: 1em;
      opacity: 0.6;
    }
    p#name {
      font-size: 1.5em;
      font-weight: bold;
    }

    span#known-as {
      opacity: 0.6;
    }

    span#nickname {
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 768px) {
  div.content {
    justify-content: center;
    div.hello {
      font-size: 40px;
      padding-left: 0px !important;
    }
  }
}
</style>
