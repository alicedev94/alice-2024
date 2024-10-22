<script setup lang="ts">
import { ref } from 'vue'
import BodyCo from '@/components/BodyCo.vue'
import HeaderCo from '@/components/HeaderCo.vue'
import FooterCo from '@/components/FooterCo.vue'

import { useModeStore } from '@/stores/mode'
const mode = useModeStore()

const changeMode = () => {
  mode.chageMode()
}

const showOptions = () => {
  console.log('showOptions')
}
</script>

<template>
  <div
    :class="[
      'principal-trasition',
      mode.isLightMode ? 'eme-light' : 'eme-dark',
    ]"
  >
    <HeaderCo @change-mode="changeMode" @show-options="showOptions" />
    <BodyCo />
    <!-- <AvatarCo /> -->
  </div>

  <FooterCo />
</template>
