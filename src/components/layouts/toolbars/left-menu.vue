<template>
  <div slot="header" class="toolbar inverted orange">
    <button
      class="hide-on-drawer-visible"
      @click="$refs.leftDrawer.open()"
    >
      <i>menu</i>
    </button>      

    <quasar-toolbar-title :padding="1">
      Quasar Kitchen Sink Components
    </quasar-toolbar-title>

    <button
      class="hide-on-drawer-visible"
      @click="$refs.rightDrawer.open()"
    >
      <i>menu</i>
    </button>      
  </div>
</template>