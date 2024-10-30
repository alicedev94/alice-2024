<script setup>
import { useModeStore } from '@/stores/mode'
// import { useNameStore } from '@/stores/name'

const mode = useModeStore()
// const name = useNameStore()
</script>

<template>
  <div :class="['principal-trasition eme-card', mode.isLightMode ? 'eme-content-light' : 'eme-content-dark',]">
    <p :class="['eme-des arvo-regular eme-text-init', mode.isLightMode ? 'font-color-light' : 'font-color-dark']">
      Aincrad (アインクラッド Ainkuraddo): A Monument to Akihiko Kayaba's Genius. May the floating castle continue to shine in
      our hearts. Long live Aincrad.
    </p>
  </div>
</template>

<style scoped>
.eme-card {
  font-size: 20rem;
  align-self: center;
  margin-top: 1rem;
  padding: 1rem;
  /* Añade padding para espaciar el texto */
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  text-align: justify;
  border-radius: 1rem;
}
</style>
