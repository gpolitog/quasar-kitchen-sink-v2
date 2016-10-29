<template>
  <drawer-layout>
    <!-- TODO: use slots -->
  </drawer-layout>
</template>

<script>
import DrawerLayout from './layouts/play'

export default {
  components: {
    'drawer-layout': DrawerLayout
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
