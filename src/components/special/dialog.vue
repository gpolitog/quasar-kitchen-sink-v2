<template>
  <section class="example">
    <button @click="showDialog()">Show dialog</button>
  </section>
</template>
<script>
import { Dialog } from 'quasar'

export default {
  methods: {
    showDialog () {
      Dialog.create({
        title: 'Warning',
        message: 'You are about to run out of disk space.',
        buttons: [
          'Cancel',
          {
            label: 'Empty Trash Bin',
            handler () {
              // empty the trash bin, yo
            }
          }
        ]
      })
    }
  }
}
</script>

