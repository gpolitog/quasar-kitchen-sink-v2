<template lang="jade">
  .code-example
    .code-title {{ title }}
    pre
      code(:class="language")
        slot(name="code-block")
          Code goes here!
</template>

<script>
// const worker = new Worker('workers/syntax-highlighter.js')
// log('worker', worker)
const log = console.log
import hljs from 'highlight.js'

export default {
  props: ['title', 'code', 'language', 'target'],
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
      let codeEl = this.$el.querySelector('code')

      var code = this.code || codeEl.textContent
      if (!code) {
        log('missing code property to be displayed...')
        return
      }
      let highlighted = hljs.highlightAuto(code).value
      codeEl.innerHTML = highlighted
    })
  }
}
</script>

<style lang="css">
:root {
  --main-bg-color: black;
}

pre {
  background: var(--main-bg-color);
  width: 100%;
  border: 4px solid silver;
  padding: 1em;
}

.code-title {
  color: gray;
  font-size: 1.5em;
}
</style>


