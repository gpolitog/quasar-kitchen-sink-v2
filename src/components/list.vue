<template>
  <div class="layout-view">
    <section class="example">
      <p class="caption">Platform Delimiter - changes based on Theme</p>
      <div class="list platform-delimiter">
        <div class="item" v-for="n in 3">
          <div class="item-content">
            List Item
          </div>
        </div>
      </div>
      <code-display title="List example" language="javascript">
        <span slot="code-slot">{{ code }}</span> 
      </code-display>
    </section>
  </div>
</template>  
<script>
export default {
  data: () => {
    return {
      code: `console.log('hello world')`
    }
  }
}
</script>