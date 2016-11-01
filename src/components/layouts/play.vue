<template>
  <quasar-layout>
    <right-menu slot="header" :refs="$refs">
    </right-menu>

    <div slot="header" class="toolbar primary">
      <quasar-search :model.sync="search" class="primary"></quasar-search>
    </div>

    <x-navigation slot="navigation"></x-navigation>

    <left-drawer ref="leftDrawer"></left-drawer>

    <router-view class="layout-view"></router-view>

    <right-drawer ref="rightDrawer"></right-drawer>

    <x-footer slot="footer"></x-footer>
  </quasar-layout>
</template>
<script>
import { LeftDrawer, RightDrawer } from './drawers'
import { Footer } from './toolbars'
import { Navigation } from './tabs'

console.log('footer', Footer)

export default {
  data () {
    return {
      search: ''
    }
  },
  components: {
    'x-navigation': Navigation,
    'x-footer': Footer,
    'left-drawer': LeftDrawer,
    'right-drawer': RightDrawer
  }
}
</script>