<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search..." >
    </div>

    <div class="entry-scroll-area">
      <Entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'EntryList',
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue')),
  },
}
</script>

<style lang="sass" scoped>
.entry-list-container
  border-right: 1px solid #2c3e50
  height: calc(100vh - 56px)

.entry-scroll-area
  height: calc(100vh - 110px)
  overflow-y: auto
  overflow-x: hidden
</style>