<template>
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
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        { link: 'root', label: '<-' },
        { link: 'breadcrumb', label: 'Breadcrumb' },
        { link: 'button', label: 'Button' },
        { link: 'card', label: 'Card' },
        { link: 'chat', label: 'Chat' },
        { link: 'label', label: 'Label' },
        { link: 'list', label: 'List' },
        { link: 'timeline', label: 'Timeline' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>

