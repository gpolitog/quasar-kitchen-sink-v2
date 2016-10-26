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
pre {
  background: darkslateblue;
  width: 100%;
  border: 4px solid silver;
  padding: 1em;
}

.code-title {
  color: gray;
  font-size: 1.5em;
}


.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #282a36;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-section,
.hljs-link {
  color: #8be9fd;
}

.hljs-function .hljs-keyword {
  color: #ff79c6;
}

.hljs,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-string,
.hljs-title,
.hljs-name,
.hljs-type,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #f1fa8c;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #6272a4;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}
</style>


