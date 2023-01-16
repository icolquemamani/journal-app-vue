<template>
  <button class="btn btn-secondary fab" @click="handleClick">
    <i 
      class="fas fa-2x" 
      :class="icon"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'FabBook',
  props: {
    handleClick: {
      type: Function,
      required: true
    },
    icon: {
      type: String,
      default: 'fas fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 2rem;
  height: 64px;
  position: fixed;
  right: 2rem;
  width: 64px;
  z-index: 999;
}
</style>