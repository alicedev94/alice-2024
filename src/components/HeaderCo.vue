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
      <div class="nav-logo m-plus-rounded-1c-bold eme-orizontal logo">
        <div class="emerald dimension"></div>
        <p class="title">{{ name.homePage }}</p>
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

.emerald {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #50C878, #7FFFD4, #008B8B, #50C878);
  background-size: 400% 400%;
  animation: sparkle 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%);
  font-size: 24px;
  color: black;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5),
    inset 5px 5px 15px rgba(0, 0, 0, 0.3),
    inset -5px -5px 15px rgba(255, 255, 255, 0.3);
}

@keyframes sparkle {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.dimension {
  width: 4rem;
  height: 3.8rem;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 1.8rem;
}
</style>
