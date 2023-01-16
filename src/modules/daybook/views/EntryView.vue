<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-5 fw-bold">{{ entry.date.day }}</span>
      <span class="mx-1 fs-3">{{ entry.date.month }}</span>
      <span class="mx-2 fw-light">{{ entry.date.year }}, {{ entry.date.dayName }}</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Upload image
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea rows="3" placeholder="What happened today?"></textarea>
  </div>
  <Fab icon="fa-save" />
  <img src="https://img.remediosdigitales.com/398d64/gato-siames-1/1366_2000.jpeg" alt="image" class="img-thumbnail" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: {
    entry: {
      type: Object,
      required: true,
      default: () => ({
        date: {
          day: 0,
          month: '',
          year: 0,
          dayName: ''
        }
      })
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)}
</style>
