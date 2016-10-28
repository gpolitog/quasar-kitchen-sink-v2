<template>
  <quasar-tabs
    :refs="$refs"
    default-tab="bar"
  >
    <quasar-tab @click="onTab()" v-for="tab in tabs" :name="tab.name" :icon="tab.icon" :disable="tab.disable" :hidden="tab.hidden">
    </quasar-tab>
  </quasar-tabs>
</template>
<script>
// Supports `v-model` which holds the active Tab’s name
// When using `v-model` it’s pointless to also
// use `default-tab` property, since you can initialize the model with a name
export default {
  data: () => {
    return {
      tabs: [
        { name: 'foo', icon: 'cloud' },
        { name: 'bar', icon: 'home', disable: true },
        { name: 'voo', icon: 'car', hidden: true },
        { name: 'voo', icon: 'alarm', hidden: false }
      ]
    }
  },
  methods: {
    onTab: (name) => {
      this.$refs.setActiveTab(name)
    }
  }
}
</script>