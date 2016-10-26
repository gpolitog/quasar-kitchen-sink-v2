<template>
  <section class="example">
    <ul class="breadcrumb">
      <li v-for="item in items">
        <a>
          <i>{{ item.icon }}</i> {{ item.label }}
        </a>
      </li>
    </ul>
    <code-display title="VM" language="html" :code="code.vm">
    </code-display>  
    <code-display title="View" language="html" :code="code.view">
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
      code: {
        view: `<ul class="breadcrumb">
  <li v-for="item in items">
    <a>
      <i>{{ item.icon }}</i> {{ item.label }}
    </a>
  </li>
</ul>`,
        vm: `export default {
  data: () => {
    return {
      items: [
        { link: 'home', label: 'Home' }
      ],
    }
  }
}`
      }
    }
  }
}
</script>

<style lang="styl">
</style>
