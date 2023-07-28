import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const show = ref(false)

  const setSidebar = (payload) => {
    show.value = payload
  }

  return { show, setSidebar }
})
