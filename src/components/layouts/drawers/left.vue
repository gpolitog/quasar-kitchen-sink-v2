<template>
  <quasar-drawer ref="leftDrawer">
    <div class="toolbar light">
      <quasar-toolbar-title :padding="1">
          Drawer
      </quasar-toolbar-title>
    </div>

    <div class="list no-border platform-delimiter">
      <quasar-drawer-link icon="view_quilt" to="/layouts" exact>
        About Layout
      </quasar-drawer-link>
      <hr>
      <div class="list-label">Layout Components</div>
      <quasar-drawer-link icon="build" to="/layouts/toolbar/left-menu" exact>
        Simple Toolbar
      </quasar-drawer-link>
      <quasar-drawer-link icon="tab" to="/layouts/tabs/simple" exact>
        Simple Tabs
      </quasar-drawer-link>
      <quasar-drawer-link icon="compare_arrows" to="/layouts/drawers/double" exact>
        Layout Drawer
      </quasar-drawer-link>
    </div>
  </quasar-drawer>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    open (cb) {
      this.$refs.leftDrawer.open(() => {
        if (cb) {
          cb()
        }
      })
    }
  }
}
</script>