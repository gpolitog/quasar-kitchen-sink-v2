<template>
  <div class="layout-view">
    <section class="example">
      <!-- Regular shaped -->
      <button class="primary" @click="onClick()">
        Button Label
      </button>
      <!-- Circular shaped; only use icon as content -->
      <button class="primary circular">
        <i>alarm</i>
      </button>
      <code-display title="View" language="html" :code="code.view">
      </code-display>
      <code-display title="VM" language="html" :code="code.vm">
      </code-display>
    </section>
  </div>
</template>
<script>
const vm = require('raw!../../examples/css/button/vm.js.txt')
const view = require('raw!../../examples/css/button/view.html.txt')

export default {
  data: () => {
    return {
      clicks: 1,
      code: {
        vm: vm,
        view: view
      }
    }
  },
  methods: {
    onClick (event) {
      this.clicks++
      console.log('clicks', this.clicks)
    }
  }
}
</script>
