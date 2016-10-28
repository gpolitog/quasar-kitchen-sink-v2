<template>
  <quasar-layout>
    <quasar-drawer slot="left-drawer" ref="leftDrawer">
      <div class="list platform-delimiter">
        <div class="list-header">
          Left Side Drawer
        </div>
        <quasar-drawer-link v-for="item in items" :icon="item.icon" :to="item.link" exact>{{ item.label }}</quasar-drawer-link>
      </div>
    </quasar-drawer>

    <left-menu></left-menu>

    <router-view class="layout-view"></router-view>
  </quasar-layout>
</template>
<script>
export default {
  props: {
    // TODO: use this instead, with default array
    links: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
    return {
      items: [
        { link: 'css', label: 'CSS', icon: 'alarm' },
        { link: 'form', label: 'Form', icon: 'cloud' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>
