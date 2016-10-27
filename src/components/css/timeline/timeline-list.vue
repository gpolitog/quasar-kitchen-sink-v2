<template>
  <div class="timeline">
    <!-- label -->
    <div class="timeline-label">
      <h4 class="bg-white text-italic">
        {{ label }
      </h4>
    </div>
    <timeline-item v-for="item in items" :item="item"></timeline-item>
  </div>
</template>
<script>
import TimelineItem from './timeline-item'

const view = require('raw!../../../examples/css/timeline/view.html.txt')
const vm = require('raw!../../../examples/css/timeline/vm.js.txt')

export default {
  components: {
    'timeline-item': TimelineItem
  },
  data: () => {
    return {
      code: {
        view: view,
        vm: vm
      },
      label: 'Friday',
      items: [
        {
          badge: {
            icon: 'alarm',
            user: 'boy'
          },
          title: 'Trip to mountains',
          date: {
            time: '17:01',
            day: 'June 16th, 2016'
          },
          content: {
            title: 'hello',
            text: 'hello world'
          }
        }
      ]
    }
  }
}
</script>

<div clas