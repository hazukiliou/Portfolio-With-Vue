<template>
  <div class="navbar">
    <BaseMenuIcon @click="setSidebar(true)" />
  </div>
</template>

<script setup lang="ts">
import BaseMenuIcon from '@/components/BaseMenuIcon.vue'
import { useSidebarStore } from '@/stores'

const { setSidebar } = useSidebarStore()
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background-color: #10163a;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
