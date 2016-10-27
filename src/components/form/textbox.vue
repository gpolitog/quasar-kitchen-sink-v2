<template>
  <div class="layout-view">
    <section class="example">  
      <div class="stacked-label">
        <input v-model="username" required class="full-width">
        <label>{{ label }}</label>
      </div>
      <div class="list">
        <div class="item two-lines" v-for="item in items">
          <i class="item-primary">{{ item.label }}</i>
          <div class="item-content">
            <input :placeholder="item.placeholder" v-model="item.value" class="full-width">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      label: 'Your name',
      username: '',
      items: [
        {label: 'title', placeholder: 'Your title'},
        {label: 'food', placeholder: 'Your favourite dish'}
      ]
    }
  }
}
</script>