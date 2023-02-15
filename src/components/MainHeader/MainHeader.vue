<template>
  <div class="header">
    <h2 class="header__title">
      Your Progress
      <span class="header__steepsCount">{{ steps }} steps to complete</span>
    </h2>
    <button
      class="header__btn"
      @click="hide"
    >
      hide
    </button>
  </div>
</template>
<script lang="js">
export default {
  emits:['show-container'],
  computed: {
    steps () {
      return this.$store.state.plans.filter((e)=>e.status !== 'completed').length
    }
  },
  methods: {
    hide: function() {
      this.$emit('show-container')
    }
  }
}
</script>
<style src="./_mainHeader.scss" lang="scss"></style>
