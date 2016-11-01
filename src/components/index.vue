<template>
  <play-layout>
    <!-- TODO: use slots -->
  </play-layout>
</template>

<script>
import PlayLayout from './layouts/play'

export default {
  components: {
    'play-layout': PlayLayout
  },
  data: () => {
    return {
      items: [
        { link: 'css', label: 'CSS', icon: 'alarm' },
        { link: 'form', label: 'Form', icon: 'cloud' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>
