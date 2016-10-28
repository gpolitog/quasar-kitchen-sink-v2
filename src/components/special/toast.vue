<template>
  <section class="example">
    <button @click="showToast()">Show toast</button>
  </section>
</template
<script>
import { Toast } from 'quasar'

export default {
  methods: {
    showToast() {
      Toast.create({
        html: 'Message to display',
        icon: 'alarm_add',
        timeout: 2500,
        color: '#f8c1c1',
        bgColor: 'white',
        button: {
          label: 'Undo',
          handler () {
            // Specify what to do when button is clicked/tapped
          },
          color: '#000'
        },
        vm: {
          // VueModel for the Toast
        }
      })
    }
  }
}
</script>