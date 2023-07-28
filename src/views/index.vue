<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="$router.push({ name: 'UserView' })">GO</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  redirect: '/user'
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-flow: column;
}
</style>
