<template>
  <section class="example">
  <label v-for="item in items">
    <quasar-range v-model="item.value" :min="1" :max="7"></quasar-range>
    {{ item.label }}
  </label>
</section>
</template>
<script>
export default {
  data: () => {
    return {
      items: [{
        label: 'a', value: 2
      }]
    }
  }
}
</script>