<template>
  <div>
    <div class="content">
      <div class="hello">
        <p id="hi">
          <span>Hi, I am</span> <br />
          <span id="name"> Paweł Lidwin </span><br />
          <span>also known as</span> <span id="nickname">Linguin</span>
        </p>
        <p id="comment">// go to the page</p>
        <div class="input-place">
          >
          <input
            v-model="autocomplete"
            type="text"
            class="command-input bg"
            readonly
          />
          <input
            v-model="inputValue"
            maxlength="20"
            type="text"
            class="command-input"
            placeholder="whois"
            @keyup.enter="commandAction"
            @keyup.right="inputValue = autocomplete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const inputValue = ref('')
const autocomplete = ref('')

const commands = ref(
  [
    'whois',
    'cd about',
    'cd blog',
    'cd github',
    'cd heroic',
    'cd twitter',
    'cd linkedin',
    'cd planpk',
    'open about',
    'open blog',
    'open github',
    'open heroic',
    'open twitter',
    'open linkedin',
    'open planpk',
  ].sort()
)

watch(inputValue, (newVal) => {
  if (!newVal) {
    autocomplete.value = ''
    return
  }
  const autocompeteCommands = commands.value.filter((v) =>
    v.toLowerCase().startsWith(newVal.toLowerCase())
  )
  autocomplete.value = autocompeteCommands[0] || ''
})

const commandAction = () => {
  if (autocomplete.value > inputValue.value) {
    inputValue.value = autocomplete.value
  }
  const commandParts = inputValue.value.split(' ')
  if (commandParts.length === 0) return

  switch (commandParts[0]) {
    case 'open':
    case 'cd': {
      switch (commandParts[1]?.toLowerCase()) {
        case 'about':
          router.push('/about-me')
          break
        case 'blog':
          router.push('/blog')
          break
        case 'github':
          window.open('https://github.com/imLinguin', '_blank')
          break
        case 'heroic':
          window.open('https://github.com/Heroic-Games-Launcher', '_blank')
          break
        case 'twitter':
          window.open('https://twitter.com/imLinguin', '_blank')
          break
        case 'linkedin':
          window.open('https://www.linkedin.com/in/pawellidwin', '_blank')
          break
        case 'planpk':
          window.open('https://planpk.linguin.dev', '_blank')
          break
      }
      break
    }
    case 'whois':
      router.push('/about-me')
      break
  }

  inputValue.value = ''
  autocomplete.value = ''
}

useHead({
  title: 'Home',
})
</script>

<style lang="scss" scoped>
div.content {
  background: var(--lighter-dark);
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  div.hello {
    padding: 0 10%;
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
  input.command-input {
    margin: 10px;
    min-width: 200px;
    width: 50vw;
    font-weight: bold;
    font-size: 0.8em;
    color: var(--primary);
    background-color: transparent;
    border: none;
    position: absolute;
    background-image: none;
    box-shadow: none;
    z-index: 2;
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &.bg {
      opacity: 0.6;
      z-index: 1;
      position: absolute;
      user-select: none;
    }
  }
}

@media screen and (max-width: 768px) {
  div.content {
    justify-content: center;
    height: calc(100vh - 45px);
    div.hello {
      font-size: 40px;
      padding: 0px 10px !important;
    }
  }
}
</style>
