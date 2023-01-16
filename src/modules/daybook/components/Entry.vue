<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      <span class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryBook',
}
</script>

<style lang="sass" scoped>
.entry-container
  border-bottom: 1px solid #2c3e50
  transition: all 0.3s ease-in

  &:hover
    background-color: lighten(grey, 45%)
    transition: all 0.3s ease-in

  .entry-description
    font-size: 0.9rem
</style>
