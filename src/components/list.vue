<template>
  <div class="layout-view">
    <p class="caption">Platform Delimiter - changes based on Theme</p>
    <div class="list platform-delimiter">
      <div class="item" v-for="n in 3">
        <div class="item-content">
          List Item
        </div>
      </div>
    </div>
    <code-display title="List example" :code="code" language="html"></code-display
  </div>
</template>  
<script>
export default {
  data: () => {
    return {
      code: require('../examples/list/basic.html')
    }
  }
}
</script>