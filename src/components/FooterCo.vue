<script setup lang="ts">
import { useModeStore } from '@/stores/mode'

const mode = useModeStore()
</script>

<template>
  <!-- <footer class="eme-text-center"> -->
  <footer
    :class="[
      'principal-trasition eme-text-center',
      mode.isLightMode ? 'eme-footer-light' : 'eme-footer-dark',
    ]"
  >
    <a class="segoe-UI" href="/"
      >&copy; 2024 Dilan Marcano. Todos los derechos reservados.
    </a>
  </footer>
</template>
