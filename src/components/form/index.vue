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
        { link: 'checkbox', label: 'Checkbox' },
        { link: 'datetime', label: 'Date & Time' },
        { link: 'double-range', label: 'Double Range' },
        { link: 'knob', label: 'Knob' },
        { link: 'numeric', label: 'Numeric' },
        { link: 'range', label: 'Range' },
        { link: 'radio', label: 'Radio' },
        { link: 'rating', label: 'Rating' },
        { link: 'select', label: 'Select' },
        { link: 'select-dialog', label: 'Select dialog' },
        { link: 'text-area', label: 'Text area' },
        { link: 'textbox', label: 'Textbox' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>

