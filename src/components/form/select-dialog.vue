<template>
  <section class="example">
    <!-- With Radios -->
    <quasar-dialog-select
      type="radio"
      v-model="select"
      :options="selectOptions"
      ok-label="Pick"
      cancel-label="Neah"
      title="Radios"
    ></quasar-dialog-select>
    <!-- With Checkboxes -->
    <quasar-dialog-select
      type="checkbox"
      v-model="select"
      :options="selectOptions"
      ok-label="Pick"
      cancel-label="Neah"
      title="Checkboxes"
    ></quasar-dialog-select>
    <!-- With Toggles -->
    <quasar-dialog-select
      type="toggle"
      v-model="select"
      :options="selectOptions"
      ok-label="Pick"
      cancel-label="Neah"
      title="Toggles"
    ></quasar-dialog-select>
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
