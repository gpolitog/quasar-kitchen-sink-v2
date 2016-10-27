<template>
  <section class="example">
    <quasar-numeric
      v-model="number"
      :min="1"
      :max="17"
    ></quasar-numeric>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      number: {
      }
    }
  }
}
</script>