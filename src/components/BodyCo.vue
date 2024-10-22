<script setup lang="ts">
import CardCo from './CardCo.vue'

const positions = [1, 2, 3, 4, 5]
</script>

<template>
  <div class="eme-core-center-app">
    <div class="list">
      <CardCo v-for="position in positions" :key="position" />
    </div>
  </div>
</template>
