<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="leftClick()">
        <i>menu</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Quasar Layout
      </quasar-toolbar-title>
    </div>

    <quasar-drawer ref="leftDrawer">
      <div class="toolbar light">
        <quasar-toolbar-title :padding="1">
            Drawer
        </quasar-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <quasar-drawer-link icon="view_quilt" :to="{name: 'css'}" exact>
          CSS
        </quasar-drawer-link>
        <hr>
        <div class="list-label">Layout Components</div>
        <quasar-drawer-link icon="build" :to="{name: 'form'}" exact>
          Form
        </quasar-drawer-link>
        <quasar-drawer-link icon="tab" :to="{name: 'layouts'}" exact>
          Layout
        </quasar-drawer-link>
        <quasar-drawer-link icon="tab" :to="{name: 'special'}" exact>
          Special
        </quasar-drawer-link>
      </div>
    </quasar-drawer>

    <router-view class="layout-view"></router-view>
  </quasar-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    leftClick () {
      let drawer = this.$refs.leftDrawer
      console.log('left', drawer)
      // drawer.open()
      drawer.toggle()
    },
    rightClick () {
      let drawer = this.$refs.rightDrawer
      console.log('right', drawer)
      drawer.open()
    }
  }
}
</script>