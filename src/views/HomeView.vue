<script setup>
import BodyCo from '@/components/BodyCo.vue'
import HeaderCo from '@/components/HeaderCo.vue'
import FooterCo from '@/components/FooterCo.vue'

// Test componet
import Aincrad from '@/components/Aincrad.vue'
import CardCo from '@/components/CardCo.vue'

import { useModeStore } from '@/stores/mode'


const mode = useModeStore()

const changeMode = () => {
  mode.chageMode()
}

const showOptions = () => {
  console.log('showOptions')
}

// Test for content and deploy
const onlyTestContent = [0]
</script>

<template>
  <div :class="[
    'principal-trasition',
    mode.isLightMode ? 'eme-light' : 'eme-dark',
  ]">
    <HeaderCo @change-mode="changeMode" @show-options="showOptions" />

    <div class="app">
      <BodyCo v-for="item in onlyTestContent" />
      <!-- <DogCo /> -->
      <Aincrad />
      <CardCo />
    </div>

  </div>

  <!-- Test usage component -->

  <!-- Este footer me esta dando conflictos -->

  <FooterCo />
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
}
</style>