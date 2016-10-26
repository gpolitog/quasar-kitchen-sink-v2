<template>
  <div class="layout-view">
    <section class="example">
      <!-- Basic Labels -->
      <div class="labels basic" v-for="label in labels.basic">
        <span class="label bg-primary text-white">{{ label.text }}</span>
        <span class="label bg-secondary text-white shadow-1">{{ label.text }}</span>
      </div>
      <!-- Floating Labels -->
      <button class="light relative-position">
        {{ labels.floating[0].text }}
        <span class="floating label circular bg-primary text-white">22</span>
      </button>
      <button class="red relative-position">
        {{ labels.floating[1].text }}
        <span class="floating label bg-dark">22</span>
      </button>
    </section>
  </div>
</template>
<script>
// TODO: make classes dynamic!

export default {
  data: () => {
    return {
      labels: {
        basic: [
          { text: 'one' },
          { text: 'two' }
        ],
        floating: [
          { text: 'red' },
          { text: 'green' }
        ]
      },
      code: {
        vm: require('raw!../examples/label/vm.js.txt'),
        view: require('raw!../examples/label/view.html.txt')
      }
    }
  }
}
</script>