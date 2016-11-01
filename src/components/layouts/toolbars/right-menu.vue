<template>
  <div class="toolbar">
    <quasar-toolbar-title :padding="1">
      Quasar Kitchen Sink Components
    </quasar-toolbar-title>

    <button class="hide-on-drawer-visible" @click="refs.rightDrawer.open()">
      <i>menu</i>
    </button>      
  </div>
</template>
<script>
export default {
  props: ['refs']
}
</script>