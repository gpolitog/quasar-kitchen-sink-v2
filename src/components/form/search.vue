<template>
  <section class="example">
    <quasar-search 
      v-model="hotels"
      :debounce="600"
      placeholder="Hotels"
      icon="local_hotel"
    ></quasar-search>
  </section>
</template>
<script>
export default {
  // TODO: trigger anytime hotels is updated via search
  data: () => {
    return {
      hotels: ''
    }
  }
}
</script>