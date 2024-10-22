<script setup lang="ts">
import { ref } from 'vue'
import { useModeStore } from '@/stores/mode'

import { useNameStore } from '@/stores/name'

const mode = useModeStore()
const name = useNameStore()
</script>

<template>
  <header
    :class="['eme-header', mode.isLightMode ? 'eme-nav-light' : 'eme-nav-dark']"
  >
    <nav class="eme-nav">
      <div class="nav-logo m-plus-rounded-1c-bold">
        <p>{{ name.homePage }}</p>
      </div>
      <div class="eme-orizontal m-plus-rounded-1c-bold">
        <p @click="$emit('changeMode')" class="eme-nav-theme">DAY</p>
        <p @click="$emit('showOptions')">OPT</p>
      </div>
    </nav>
  </header>
</template>
