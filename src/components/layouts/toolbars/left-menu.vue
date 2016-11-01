<template>
  <span class="toolbar">
    <button class="hide-on-drawer-visible" @click="refs.leftDrawer.open()">
      <i>menu</i>
    </button>
    <quasar-toolbar-title :padding="1">
      Quasar Layout
    </quasar-toolbar-title>
    <button @click="onClickRight()">
      <i>assignment</i>
    </button>
  </span>
</template>
<script>
export default {
  props: ['refs'],
  methods: {
    onClickLeft () {
      let drawer = this.refs.leftDrawer
      console.log('left', drawer)
      if (drawer) {
        drawer.open(() => {
          console.log('left opened')
        })
      }
    },
    onClickRight () {
      let drawer = this.refs.rightDrawer
      console.log('right', drawer)
      if (drawer) {
        drawer.open(() => {
          console.log('right opened')
        })
      }
    }
  }
}
</script>
<style>
.toolbar-wrapper {
  display: inline-flex;
  text-align: center;
  align-items: center;
  width: 100%;
}

.toolbar {
  text-align: center;
}

</style>
