<template>
  <section class="example">
    <div class="stacked-label">
      <textarea class="full-width" v-model="description"></textarea>
      <label>Stacked Label</label>
    </div>    
    <div class="floating-label">
      <textarea required class="full-width" lazy v-model="profile"></textarea>
      <label>Floating Label</label>
    </div>
    <p class="caption">Textbox and Textarea with No Borders</p>
    <div class="list">
      <div class="item multiple-lines item-delimiter">
        <div class="item-content">
          <!-- Notice the "no-border" CSS class -->
          <textarea class="full-width no-border" v-model="description" debounce="300">
          </textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      profile: '',
      description: ''
    }
  }
}
</script>
        