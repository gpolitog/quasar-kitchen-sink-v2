<template>
  <span>
    <button
      class="hide-on-drawer-visible"
      @click="onClickLeft()"
    >
      <i>menu</i>
    </button>      

    <quasar-toolbar-title :padding="1">
      Components
    </quasar-toolbar-title>

    <button
      class="hide-on-drawer-visible"
      @click="onClickRight()"
    >
      <i>menu</i>
    </button>
  </span>
</template>
<script>
export default {
  props: {
    refs: {
      type: Object
    }
  },
  methods: {
    onClickLeft () {
      console.log('leftDrawer', this.refs, this.refs.leftDrawer)
      // this.refs.leftDrawer.open()
    },
    onClickRight () {
      console.log('rightDrawer', this.refs.rightDrawer)
      // this.refs.rightDrawer.open()
    }
  }
}
</script>