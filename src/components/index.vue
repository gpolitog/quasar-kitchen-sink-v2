<template>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <quasar-toolbar-title :padding="1">
        Quasar Framework
      </quasar-toolbar-title>
    </div>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    <div class="layout-view">
      <p class="caption">Quasar Kitchen Sink Components</p>
      <div class="list">
        <div class="item" v-for="item in items">
          <div class="item-content">
            <router-link :to="{ name: item.link }">{{ item.label }}</router-link>
          </div>
        </div>
      </div>
       <router-view></router-view>
    </div>
  </quasar-layout>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { link: 'css', label: 'CSS' },
        { link: 'form', label: 'Form' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>
