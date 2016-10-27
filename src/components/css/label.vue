<template>
  <div class="layout-view">
    <section class="example">
      <!-- Basic Labels -->
      <div class="labels basic" v-for="label in labels.basic">
        <span class="label" :class="label.styles">{{ label.text }}</span>
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
      <code-display title="View" language="html" :code="code.view">
      </code-display>
      <code-display title="VM" language="html" :code="code.vm">
      </code-display>
    </section>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      labels: {
        basic: [
          {
            text: 'one',
            styles: {
              'bg-primary': true,
              'text-white': true
            }
          },
          {
            text: 'two',
            styles: {
              'bg-secondary': true,
              'text-white': true,
              'shadow-1': true
            }
          }
        ],
        floating: [
          { text: 'red' },
          { text: 'green' }
        ]
      },
      code: {
        vm: require('raw!../../examples/css/label/vm.js.txt'),
        view: require('raw!../../examples/css/label/view.html.txt')
      }
    }
  }
}
</script>