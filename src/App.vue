<template>
  <main @click="setSidebar(false)">
    <RouterView name="Navbar" />
    <RouterView />
    <RouterView name="Sidebar" />
  </main>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores'
import '@/assets/css/normalize.css'

const { setSidebar } = useSidebarStore()
</script>

<style lang="scss" scoped>
main {
  font-family: 'PingFangSC', 'Microsoft JhengHei', 'Avenir', Helvetica, Arial,
    sans-serif;
  padding: 20px 20px 0 280px;
  transition: padding-left ease-in-out 500ms;
  height: 100vh;
  box-sizing: border-box;
  background: #262c49;
  color: #fff;
  font-size: 14px;
}

@media (max-width: $max-width) {
  main {
    padding-left: 20px;
  }
}
</style>
