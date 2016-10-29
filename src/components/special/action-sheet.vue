<template>
  <section class="example">
    <button @click="showActionSheet()">Show action sheet</button>
  </section>
</template>
<script>
import { ActionSheet } from 'quasar'

export default {
  methods: {
    showActionSheet () {
      ActionSheet.create({
        title: 'Article Actions',
        // specify ONLY IF you want gallery mode:
        gallery: true,
        actions: [
          {
            label: 'Delete',
            // Choose one of the following two:
            icon: 'delete', // specify ONLY IF using icon
            avatar: 'assets/some-avatar.png', // specify ONLY IF using avatar
            handler: () => {
              console.log('Deleted Article')
            }
          }
        ],
        // optional:
        dismiss: {
          label: 'Cancel',
          icon: 'cancel',
          classes: 'text-primary',
          handler: () => {
            console.log('Cancelled...')
          }
        }
      })
    }
  }
}
</script>