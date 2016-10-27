<template>
  <section class="example">
  <label v-for="item in items">
    <quasar-double-range v-model="item.value" :min="1" :max="7"></quasar-double-range>
    {{ item.label }}
  </label>
</section>
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        { value: 2, label: 'level' }
      ]
    }
  }
}
</script>