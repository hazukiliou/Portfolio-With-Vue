<template>
  <RouterView />
</template>

<script setup lang="ts">
import { definePage } from 'vue-router/auto'

definePage({
  path: '/user'
})
</script>