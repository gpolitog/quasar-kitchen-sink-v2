<template>
  <ul class="breadcrumb">
    <li v-for="item in items">
      <a>
        <i>{{ item.icon }}</i> {{ item.label }}
      </a>
    </li>
</ul>
</template>

<script>
// import { Utils } from 'quasar'
export default {
  data: () => {
    return {
      items: [
        { link: 'home', label: 'Home' }
      ]
    }
  }
}
</script>

<style lang="styl">
</style>
