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

// Taken from: https://googlechrome.github.io/samples/css-custom-properties/index.html

// Auxiliary method. Retrieves and sanitises the value of a custom property.
function getVariable (styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim()
}

// Auxiliary method. Sets the value of a custom property at the document level.
function setDocumentVariable (propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value)
}

export default {
  props: ['title', 'code', 'language', 'target'],
  methods: {
    styles () {
      return getComputedStyle(this.$el)
    }
  },
  mounted () {
    this.$nextTick(() => {
      let codeEl = this.$el.querySelector('code')

      // Demonstrate working with CSS variables
      // See example: https://googlechrome.github.io/samples/css-custom-properties/index.html
      let colorVar = '--main-bg-color'
      var color = getVariable(this.styles(), colorVar)
      log('old bg color', color)
      setDocumentVariable(colorVar, '#546072')

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


