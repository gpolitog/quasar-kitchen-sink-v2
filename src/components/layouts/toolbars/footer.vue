<template>
  <div class="toolbar">
    <div class="auto flex justify-center within-iframe-hide">
      <button v-go-back="'/'">
        <i class="on-left animate-blink">
          replay
        </i>
        Back to Showcase
      </button>
    </div>
    <quasar-toolbar-title :padding="0" class="within-iframe-only">
      Footer
    </quasar-toolbar-title>
  </div>
</template>
<script>
export default {
}
</script>