<template>
  <div class="layout-view">
    <section class="example">
      <div class="card">
        <div class="card-title bg-primary text-white">
          My title
        </div>
        <div class="card-content card-force-top-padding">
          Content
        </div>
      </div>
      <code-display title="View" language="html" :code="code.view">
      </code-display>
    </section>
  </div>
</template>
<script>
const view = require('raw!../../examples/css/card/view.html.txt')

export default {
  data: () => {
    return {
      code: {
        view: view
      }
    }
  },
  methods: {
  }
}
</script>
