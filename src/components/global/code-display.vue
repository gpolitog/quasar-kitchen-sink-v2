<template>
  <div class="code-example">
    <div class="code-title">{{ title }}</div>
    <pre>
      <code :class="language">
        <slot name="code">
          Code goes here!
        <slot>  
      </code>
    </pre>
  </div>
</template>

<script>
// const worker = new Worker('workers/syntax-highlighter.js')
const log = console.log
// log('worker', worker)
import hljs from 'highlight.js'

export default {
  props: ['title', 'code', 'language'],
  mounted () {
    this.$nextTick(() => {
      log('mounted code-display')
      log('language', this.language)

      var code = document.querySelector('code')
      if (!code) {
        log('missing code property to be displayed...')
        return
      }
      else {
        let content = code.textContent
        log('highlight code', content)
        let highlighted = hljs.highlightAuto(content)
        log('highlighted', highlighted)
        code.innerHTML = highlighted
      }
    })
  }
}
</script>

<style lang="styl">
.code-title
  color: gray
  font-size: 1.5em
</style>


