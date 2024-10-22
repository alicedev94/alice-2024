import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNameStore = defineStore('name', () => {
  const homePage = ref('ンン・サーンィ')
  return { homePage }
})
