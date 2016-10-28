<template>
  <section class="example">
    <quasar-tabs :refs="$refs" v-model="xTabsModel">
      <quasar-tab name="xtab-1" icon="message">Tab 1</quasar-tab>
      <quasar-tab name="xtab-2" icon="alarm">Tab 2</quasar-tab>
      <quasar-tab name="xtab-3" icon="accessibility">Tab 3</quasar-tab>
    </quasar-tabs>
    <quasar-select type="radio" v-model="xTabsModel" :options="xTabsOptions"></quasar-select>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      xTabsModel: 'xtab-2',
      xTabsOptions: [
        {label: 'Tab 1', value: 'xtab-1'},
        {label: 'Tab 2', value: 'xtab-2'},
        {label: 'Tab 3', value: 'xtab-3'}
      ]
    }
  }
}
</script>
