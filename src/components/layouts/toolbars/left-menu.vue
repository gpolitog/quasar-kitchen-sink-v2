<template>
  <div class="toolbar orange">
    <button
      class="hide-on-drawer-visible"
      @click="onClickLeft()"
    >
      <i>menu</i>
    </button>      

    <quasar-toolbar-title :padding="1">
      Components
    </quasar-toolbar-title>
  </div>
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
      console.log('left')
    },
    onClickRight () {
      console.log('right')
    }
  }
}
</script>