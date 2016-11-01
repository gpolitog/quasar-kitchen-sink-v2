<template>
  <section class="example">
  <label v-for="rating in ratings">
    <quasar-rating class="yellow" v-model="rating.value" :max-grade="5"></quasar-rating>
  </label>
</section>
</template>
<script>
export default {
  data: () => {
    return {
      ratings: [
        { value: 2 },
        { value: 4 }
      ]
    }
  }
}
</script>