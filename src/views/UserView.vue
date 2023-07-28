<template>
  <router-view />
</template>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  path: '/user'
})
</script>