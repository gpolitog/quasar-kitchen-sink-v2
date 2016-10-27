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
        { link: 'datetime', label: 'Date & Time' },
        { link: 'checkbox', label: 'Checkbox' },
        { link: 'textbox', label: 'Textbox' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>

