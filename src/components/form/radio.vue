<template>
  <section class="example">
  <label v-for="item in items">
    <quasar-radio class="orange" v-model="item.value"></quasar-radio>
    {{ item.label }}
  </label>
</section>
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        { value: 1, label: 'mud' },
        { value: 9, label: 'gold' }
      ]
    }
  }
}
</script>