<template>
  <main @click="setSidebar(false)">
    <router-view name="Navbar" />
    <router-view />
    <router-view name="Sidebar" />
  </main>
</template>

<script setup>
import { useSidebarStore } from '@/stores'

const { setSidebar } = useSidebarStore()
</script>

<style lang="scss">
@import '~@/assets/css/normalize.css';

#app {
  font-family: 'PingFangSC', 'Microsoft JhengHei', 'Avenir', Helvetica, Arial,
    sans-serif;
  color: #fff;
  background: #262c49;
  height: 100%;
  min-height: 100vh;
  font-size: 14px;
}

main {
  padding: 20px 20px 0 280px;
  transition: padding-left ease-in-out 500ms;
  height: 100vh;
  box-sizing: border-box;
}

@media (max-width: $max-width) {
  main {
    padding-left: 20px;
  }
}
</style>