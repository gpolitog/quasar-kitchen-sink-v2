<template>
  <div class="page">
    <p class="caption">Form Components</p>
    <quasar-tabs :refs="$refs" default-tab="checkbox">
      <quasar-tab v-for="(tab, index) in tabs" :name="tab.name" icon="tab.icon" :route="tab.link">    
      </quasar-tab>
    </quasar-tabs>
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

