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
      <h2 class="m-plus-rounded-1c-bold">Work</h2>

      <!-- Description -->
      <p class="eme-des arvo-regular eme-text-init">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit,
        reiciendis recusandae eos nulla iusto voluptate ut distinctio maiores
        maxime numquam iste fugit eligendi ipsa tempora quibusdam omnis illum
        atque!
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
  width: 10%;
}
</style>
