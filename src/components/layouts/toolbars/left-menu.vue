<template>
  <span class="toolbar-wrapper">
    <button class="hide-on-drawer-visible" @click="onClickLeft()">
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
          console.log('opened')
        })
      }
    },
    onClickRight () {
      let drawer = this.refs.rightDrawer
      console.log('right', drawer)
      if (drawer) {
        drawer.open(() => {
          console.log('opened')
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
</style>
