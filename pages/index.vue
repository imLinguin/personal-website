<template>
  <div>
    <div class="content">
      <div class="hello">
        <p id="hi">
          <span>Hi, I am</span> <br />
          <span id="name"> Paweł Lidwin </span><br />
          <span>known as</span> <span id="nickname">Linguin</span>
        </p>
        <p id="comment">// go to the page</p>
        <div class="input-place">
          ><input
            v-model="inputValue"
            type="text"
            class="command-input"
            placeholder="cd about"
            @keyup.enter="commandAction"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    commandAction() {
      const commandParts = this.inputValue.split(' ')

      if (commandParts.length === 0) {
        return
      }

      switch (commandParts[0]) {
        case 'cd': {
          switch (commandParts[1].toLowerCase()) {
            case 'about': {
              this.$router.push('/about-me')
              break
            }
            case 'github': {
              window.open('https://github.com/imLinguin', '_blank')
              break
            }
            case 'heroic': {
              window.open('https://github.com/Heroic-Games-Launcher', '_blank')
              break
            }
          }
          break
        }
        case 'who':
        case 'whois': {
          this.$router.push('/about-me')

          break
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
div.content {
  background: var(--lighter-dark);
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  div.hello {
    padding-left: 200px;
    font-size: 56px;
    p#hi {
      font-size: 1em;
      line-height: 1.2em;
      span {
        opacity: 0.6;
      }
    }
    span#name {
      font-size: 1.5em;
      font-weight: bold;
      opacity: 1 !important;
    }

    p#comment {
      font-size: 0.5em;
      opacity: 0.4;
      margin-top: 0.7em;
    }

    span#nickname {
      font-weight: bold;
      opacity: 1 !important;
    }
  }
}

div.input-place {
  color: var(--primary);
  font-size: 0.8em;
  font-weight: bold;
  input {
    margin-left: 10px;
    font-weight: bold;
    font-size: 0.8em;
    color: var(--primary);
    background-color: transparent;
    border: none;
    background-image: none;
    box-shadow: none;
    background-color: var(--lighter-dark);
    &:focus {
      outline: none;
    }
  }
}

@media screen and (max-width: 768px) {
  div.content {
    justify-content: center;
    width: 100%;
    height: calc(100vh - 45px);
    div.hello {
      font-size: 40px;
      padding: 0px 10px !important;
    }
  }
}
</style>
