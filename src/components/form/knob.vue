<template>
  <section class="example">
    <quasar-knob
      v-model="level"
      :min="min"
      :max="max"
    ></quasar-knob>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      level: {
        min: 1, max: 10
      }
    }
  }
}
</script>