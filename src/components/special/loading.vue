<template>
  <section class="example">
    <button @click="showLoading()">Show loading</button>
  </section>
</template
<script>
import { Loading } from 'quasar'

export default {
  methods: {
    showLoading() {
      // customizable
      Loading.show({
        message: 'Some message',
        messageColor: '#00ff00',
        spinner: 'dots',
        spinnerSize: 250, // in pixels
        spinnerColor: '#f034a3'
      })    
    }
  }
}
</script>