<script setup lang="ts">
import CardCo from './CardCo.vue'
import { useModeStore } from '@/stores/mode'
import { useNameStore } from '@/stores/name'

import AvatarCo from '@/components/AvatarCo.vue'

const mode = useModeStore()
const name = useNameStore()
</script>

<template>
  <div class="eme-core-center-app">
    <div class="eme-card scale">
      <div
        :class="[
          'principal-trasition eme-content eme-orizontal',
          mode.isLightMode ? 'eme-content-light' : 'eme-content-dark',
        ]"
      >
        <AvatarCo />
        <p class="text-card eme-text-center arvo-regular">
          Hello, I'm an indie app developer based in Japan!
        </p>
      </div>
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
</style>
