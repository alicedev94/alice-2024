import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNameStore = defineStore('name', () => {
  const homePage = ref('アリス')
  return { homePage }
})
