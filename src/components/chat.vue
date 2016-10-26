<template>
  <div class="layout-view">
    <section class="example">
      <!-- Message received from peer -->
      <div class="chat-other">
        <div class="chat-user">
          <img src="~assets/avatars/linux-avatar.png">
        </div>
        <div class="chat-date">
          {{ received.timeAgo }
        </div>
        <div class="chat-message">
          <p>
            {{ received.message }
          </p>
        </div>
      </div>
      <!-- Message sent by you -->
      <div class="chat-you">
        <div class="chat-user">
          <img src="~assets/avatars/boy-avatar.png">
        </div>
        <div class="chat-date">
          {{ sent.timeAgo }}
        </div>
        <div class="chat-message">
          <p>
            {{ sent.message }}
          </p>
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
const view = require('raw!../examples/chat/view.html.txt')
const vm = require('raw!../examples/chat/vm.js.txt')

export default {
  data: () => {
    return {
      code: {
        view: view,
        vm: vm
      },
      received: {
        timeAgo: '1 minute ago',
        message: 'hi there'
      },
      sent: {
        timeAgo: '1 minute ago',
        message: 'hello'
      }
    }
  },
  methods: {
  }
}
</script>
