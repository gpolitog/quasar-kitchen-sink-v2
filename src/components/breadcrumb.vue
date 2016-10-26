<template>
  <section class="example">
    <ul class="breadcrumb">
      <li v-for="item in items">
        <a>
          <i>{{ item.icon }}</i> {{ item.label }}
        </a>
      </li>
    </ul>
    <code-display title="Breadcrumb View" language="html" :code="code">
    </code-display>  
  </section>  
</template>

<script>
// import { Utils } from 'quasar'
export default {
  data: () => {
    return {
      items: [
        { link: 'home', label: 'Home' }
      ],
      code: `<span>hello world</span>`
    }
  }
}
</script>

<style lang="styl">
</style>
