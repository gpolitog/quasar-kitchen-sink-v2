<template>
  <div class="code-example">
    <div class="code-title">{{ title }}</div>
    <pre>
      <code :class="language">
        {{ code }}
      </code>
    </pre>
  </div>
</template>

<script>
import Vue from 'vue'

const worker = new Worker('workers/syntax-highlighter.js')
console.log('worker', worker)

export default {
  props: ['title', 'code', 'language'],
  mounted: () => {
    Vue.nextTick(() => {
      console.log('mounted code-display', this.language, this.title, this.code)

      var code = this.code
      if (!code) return
      worker.onmessage = function (event) {
        code.innerHTML = event.data
      }
      worker.postMessage(code.textContent)
    })
  }
}
</script>

<style lang="styl">
.code-title
  color: gray
  font-size: 1.5em
</style>


