<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <span>
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <quasar-toolbar-title :padding="1">
          Quasar Layout
        </quasar-toolbar-title>
        <button @click="rightClick()">
          <i>assignment</i>
        </button>
      </span>
    </div>

    <div slot="header" class="toolbar primary">
      <quasar-search :model.sync="search" class="primary"></quasar-search>
    </div>

    <quasar-tabs slot="navigation">
      <quasar-tab icon="view_quilt" route="/form" exact replace>Form</quasar-tab>
      <quasar-tab icon="view_day" route="/css" replace>CSS</quasar-tab>
      <quasar-tab icon="view_day" route="/special" replace>Special</quasar-tab>
      <quasar-tab icon="input" route="/layouts" replace>Layouts</quasar-tab>
    </quasar-tabs>

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

    <router-view class="layout-view"></router-view>

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

    <div slot="footer" class="toolbar">
      <div class="auto flex justify-center within-iframe-hide">
        <button v-go-back="'/showcase'">
          <i class="on-left animate-blink">
            replay
          </i>
          Back to Showcase
        </button>
      </div>
      <quasar-toolbar-title :padding="0" class="within-iframe-only">
        Footer
      </quasar-toolbar-title>
    </div>
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
      drawer.open(() => {
        console.log('left drawer was opened')
      })
      drawer.toggle()
    }
  }
}
</script>