<template>
  <!-- Message sent by you -->
  <div :class="chatType">
    <div class="chat-user">
      <img :src="avatar">
    </div>
    <div class="chat-date">
      {{ message.timestamp }}
    </div>
    <div class="chat-message">
      <p>
        {{ message.message }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['message'],
  methods: {
  },
  computed: {
    avatar () {
      return require('../../../assets/avatars/' + this.message.user + '.png')
    },
    chatType () {
      return `chat-${this.message.type}`
    }
  }
}
</script>