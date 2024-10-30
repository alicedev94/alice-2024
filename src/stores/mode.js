import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModeStore = defineStore('mode', () => {
  // Default mode is light mode
  const isLightMode = ref(true)
  function chageMode() {
    isLightMode.value = !isLightMode.value
  }

  return { isLightMode, chageMode }
})
