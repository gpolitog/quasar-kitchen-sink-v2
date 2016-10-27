<template>
  <div class="layout-view">
    <section class="example">
      <ul class="breadcrumb">
        <li v-for="item in items">
          <a>
            <i>{{ item.icon }}</i> {{ item.label }}
          </a>
        </li>
      </ul>
      <code-display title="View" language="html" :code="code.view">
      </code-display>
      <code-display title="VM" language="html" :code="code.vm">
      </code-display>
    </section>
  </div>  
</template>

<script>
// import { Utils } from 'quasar'
export default {
  data: () => {
    return {
      items: [
        { icon: 'home', label: 'Home' },
        { icon: 'build', label: 'Build' },
        { icon: 'cloud', label: 'Cloud' }
      ],
      code: {
        vm: require('raw!../../examples/css/breadcrumb/vm.js.txt'),
        view: require('raw!../../examples/css/breadcrumb/view.html.txt')
      }
    }
  }
}
</script>

<style lang="styl">
</style>
