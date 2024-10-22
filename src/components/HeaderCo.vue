<script setup lang="ts">
import { ref } from 'vue'
import { useModeStore } from '@/stores/mode'

import { useNameStore } from '@/stores/name'
import menuLight from '@/assets/icon/menu-light.svg'
import sunLight from '@/assets/icon/sun-light.svg'

const mode = useModeStore()
const name = useNameStore()

// DARK -----  SUN
// LIGHT  -- --- MON
</script>

<template>
  <header :class="['eme-header', mode.isLightMode ? 'eme-nav-light' : 'eme-nav-dark']">
    <nav class="eme-nav">
      <div class="nav-logo m-plus-rounded-1c-bold">
        <p>{{ name.homePage }}</p>
      </div>
      <div class="eme-orizontal m-plus-rounded-1c-bold">
        <p @click="$emit('changeMode')" class="eme-nav-theme eme-btn"><img :src="sunLight" alt="menu.svg"></p>
        <p @click="$emit('showOptions')" class="eme-btn"><img :src="menuLight" alt="menu.svg"></p>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.eme-btn:hover {
  transition: 0.3s;
  scale: 104%;
  cursor: pointer;
}
</style>
