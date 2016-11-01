<template>
  <div class="layout-view">
    <section class="example">  
      <label>
        <quasar-checkbox v-model="blue"></quasar-checkbox>
        Blue Checkbox
      </label>
      <div class="list">
        <label v-for="item in items">
          <quasar-checkbox v-model="item.checked"></quasar-checkbox>
          {{ item.label }}
        </label>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      items: [
        {label: 'male', checked: false},
        {label: 'female', checked: true}
      ],
      blue: true
    }
  }
}
</script>