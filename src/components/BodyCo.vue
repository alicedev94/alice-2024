<script setup lang="ts">
import CardCo from './CardCo.vue'
import { useModeStore } from '@/stores/mode'
import { useNameStore } from '@/stores/name'

import AvatarCo from '@/components/AvatarCo.vue'

const mode = useModeStore()
const name = useNameStore()
</script>

<template>

  <!-- Card -->
  <div class="eme-core-center-app">
    <div class="eme-card">
      <div :class="[
        'principal-trasition eme-content eme-orizontal',
        mode.isLightMode ? 'eme-content-light' : 'eme-content-dark',
      ]">
        <AvatarCo />
        <p class="text-card eme-text-center arvo-regular">
          Independent Software Developer, passionate lover and evangelist of JavaScript.
        </p>
      </div>

      <!-- Subtittle -->
      <h2 class="m-plus-rounded-1c-bold">About</h2>

      <!-- Description -->
      <p :class="['eme-des arvo-regular eme-text-init', mode.isLightMode ? 'font-color-light' : 'font-color-dark']">
        As an Independent Software Developer, my passion for coding is deeply rooted in the principles of open-source,
        understanding the mechanics of things, and a love for video games. Inspired by the series SAO, which brilliantly
        intertwines a fascinating virtual world with cutting-edge technology, I strive to create software that bridges
        imagination and innovation. I am dedicated to continually pushing the boundaries of web development to deliver
        top-tier, dynamic applications.
      </p>
    </div>
  </div>
</template>

<style scoped>
.eme-card {
  margin-top: 12.5rem;
}

.text-card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin-left: 1.75rem;
}

.eme-des {
  margin-top: 1rem;
}

h2 {
  margin-top: 3rem;
  margin-bottom: 0;
  border-bottom: 4px solid #c2c2c2;
  width: 12.5%;
}

.font-color-light {
  color: var(--eme-color-font-dark);
}

.font-color-dark {
  color: var(--eme-color-font-light);
}
</style>
