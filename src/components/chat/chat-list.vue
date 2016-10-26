<template>
  <div class="layout-view">
    <section class="example">
      <div class="chat-list">
        <chat-message v-for="message in messages" :message="message"/>
      </div>
      <code-display title="VM" language="javascript" :code="code.vm"> 
      </code-display>
      <code-display title="View" language="html" :code="code.view"> 
      </code-display>      
    </section>
  </div>
</template>
<script>
import ChatMessage from './chat-message'

const view = require('raw!../../examples/chat/view.html.txt')
const vm = require('raw!../../examples/chat/vm.js.txt')

// See https://vuejs.org/guide/list.html#Components-and-v-for

export default {
  components: {
    // <my-component> will only be available in parent's template
    'chat-message': ChatMessage
  },
  data: () => {
    return {
      code: {
        view: view,
        vm: vm
      },
      you: {
        avatar: 'boy'
      },
      messages: [
        {
          type: 'you',
          user: 'boy', // TODO: should reference you.avatar
          text: 'hello world',
          timestamp: '2 mins ago'
        },
        {
          type: 'other',
          user: 'penguin',
          text: 'alien here :)',
          timestamp: '1 min ago'
        }
      ]
    }
  }
}
</script>
