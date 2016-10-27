<template>
  <section class="example">
    <!-- Single Selection using Radios -->
    <quasar-select
      type="radio"
      v-model="select"
      :options="selectOptions"
    ></quasar-select>
    <!-- Multiple Selection using Checkboxes-->
    <quasar-select
      type="checkbox"
      v-model="select"
      :options="selectOptions"
    ></quasar-select>
    <!-- Multiple Selection using Toggles-->
    <quasar-select
      type="toggle"
      v-model="select"
      :options="selectOptions"
    ></quasar-select>
    <!-- Disabled state -->
    <quasar-select
      disable
      type="checkbox"
      v-model="select"
      :options="selectOptions"
    ></quasar-select>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ]
    }
  }
}
</script>
    