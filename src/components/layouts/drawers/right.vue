<template>
  <quasar-drawer right-side ref="rightDrawer">
    <div class="toolbar light">
      <quasar-toolbar-title :padding="1">
          Right-side Drawer
      </quasar-toolbar-title>
    </div>

    <p style="padding: 25px;" class="text-grey-7">
      This is yet another Drawer that does not gets displayed alongside content on
      bigger screens.
    </p>
  </quasar-drawer>
</template>
<script>
export default {
  methods: {
    open (cb) {
      this.$refs.rightDrawer.open(() => {
        if (cb) {
          cb()
        }
      })
    }
  }
}
</script>
<style lang="styl">
</style>
