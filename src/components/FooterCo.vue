<script setup lang="ts">
import { useModeStore } from '@/stores/mode'
import { useNameStore } from '@/stores/name'

const mode = useModeStore()
const name = useNameStore()
</script>

<template>
  <!-- <footer class="eme-text-center"> -->
  <footer
    :class="[
      'principal-trasition eme-footer eme-text-center',
      mode.isLightMode ? 'eme-footer-light' : 'eme-footer-dark',
    ]"
  >
    <a class="segoe-UI" href="/"
      >&copy; 2024 {{ name.homePage }}. Todos los derechos reservados.
    </a>
  </footer>
</template>

<style scoped>
.eme-footer {
  padding: 5rem;
}
</style>
