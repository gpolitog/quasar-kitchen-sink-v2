<template>
  <div class="layout-view">
    <section class="example">
      <p class="caption">List</p>
      <div class="list platform-delimiter">
        <div class="item" v-for="friend in friends">
          <div class="item-content">
            {{ friend }}
          </div>
        </div>
      </div>
      <code-display title="VM" language="javascript" :code="code.vm"> 
      </code-display>
      <code-display title="View" language="html" :code="code.view"> 
      </code-display>
    </section>
  </div>
</template>
<script>
const vm = require('raw!../examples/list/vm.js.txt')
const view = require('raw!../examples/list/view.html.txt')

console.log('vm', vm)

export default {
  data: () => {
    return {
      friends: [
        'Anna',
        'Mike'
      ],
      code: {
        vm: vm,
        view: view
      }
    }
  }
}
</script>
