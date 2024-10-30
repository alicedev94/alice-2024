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
        'principal-trasition eme-content eme-orizontal cont-message',
        mode.isLightMode ? 'eme-content-light' : 'eme-content-dark',
      ]">
        <AvatarCo
          :class="['eme-color-avatar-light', mode.isLightMode ? 'eme-color-avatar-light' : 'eme-color-avatar-dark']" />
        <p
          :class="['text-card eme-text-center arvo-regular', mode.isLightMode ? 'emerald-text-light' : 'emerald-text-dark']">
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
  margin-top: 14rem;

}

.cont-message {
  display: grid;
  grid-template-columns: 1fr 3fr;
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


/* v1 */
.emerald-text-dark {
  font-size: 1.7rem;
  font-weight: bold;
  background: linear-gradient(45deg, #50C878, #7FFFD4, #008B8B, #50C878);
  background-size: 400% 400%;
  animation: sparkle 4.5s linear infinite;
  -webkit-background-clip: text;
  color: transparent;

}

@keyframes sparkle {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.emerald-text-light {
  font-size: 1.7rem;
  font-weight: bold;
  background: linear-gradient(45deg, #004f4f, #008b8b, #00afaf, #004f4f);
  /* Degradados de #008b8b */
  background-size: 400% 400%;
  animation: sparkle-dark 4.5s linear infinite;
  -webkit-background-clip: text;
  color: transparent;
}

@keyframes sparkle-dark {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.eme-color-avatar-light {
  background-color: #000000;
}

.eme-color-avatar-dark {
  background-color: #ffffff;
}
</style>
