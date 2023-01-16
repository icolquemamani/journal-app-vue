<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="btn btn-primary" @click="goToDaybook">Primary</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' })
    }
  }
}
</script>
