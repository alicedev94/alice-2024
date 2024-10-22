import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModeStore = defineStore('mode', () => {
  const isLightMode = ref(false)
  function chageMode() {
    isLightMode.value = !isLightMode.value
  }

  return { isLightMode, chageMode }
})
