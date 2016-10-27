<template>
  <div class="timeline-item">
    <div class="timeline-badge">
      <!-- badge with avatar -->
      <img :src="avatar">
      <!-- ...or badge with icon -->
      <i>{{ item.badge.icon }}</i>
    </div>
    <!-- title -->
    <div class="timeline-title">
      {{ item.title }}
    </div>
    <!-- date timestamp -->
    <div class="timeline-date text-italic">
      <div>{{ item.date.time }}</div>
      <div>{{ item.date.day }}</div>
    </div>
    <!--
      content; any Web component or DOM elements,
      in this particular case, a Card
    -->
    <div class="card">
      <div class="card-title">
        {{ item.content.title }}
      </div>
      <div class="card-content">
        {{ item.content.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  computed: {
    avatar () {
      return require('../../../assets/avatars/' + this.item.badge.user + '.png')
    }
  }
}
</script>
