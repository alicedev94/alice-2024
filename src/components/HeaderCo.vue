<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useModeStore } from '@/stores/mode'
import { useNameStore } from '@/stores/name'

// Dark theme images.
import moonDarkTheme from '@/assets/icon/theme/moon-light.svg'
import menuDarkTheme from '@/assets/icon/menu/menu-light.svg'
import gitHubDarkTheme from '@/assets/icon/gitHub/github-dark.svg'
import linkeDarkTheme from '@/assets/icon/linkedin/linke-dark.svg'
import vueDarkTheme from '@/assets/icon/Work/vue-dark.svg'

// Light theme images.
import sunLightTheme from '@/assets/icon/theme/sun-dark.svg'
import menuLightTheme from '@/assets/icon/menu/menu-dark.svg'
import gitHubLightTheme from '@/assets/icon/gitHub/github-light.svg'
import linkeLightTheme from '@/assets/icon/linkedin/linke-light.svg'
import vueLightTheme from '@/assets/icon/Work/vue-light.svg'

// State
const mode = useModeStore()
const name = useNameStore()

// detect that it is mobile

const documentWidth = ref(document.documentElement.clientWidth);
const isMobile = ref(false);
const isDesktop = ref(true);

const handleResize = () => {
  documentWidth.value = document.documentElement.clientWidth;
  updateDeviceState();
};

const updateDeviceState = () => {
  if (documentWidth.value <= 769) {
    isMobile.value = true;
    isDesktop.value = false;
  } else {
    isMobile.value = false;
    isDesktop.value = true;
  }
  // Guardar el estado en localStorage
  localStorage.setItem('isMobile', JSON.stringify(isMobile.value));
  localStorage.setItem('isDesktop', JSON.stringify(isDesktop.value));
};

onMounted(() => {
  // Restaurar el estado desde localStorage
  if (localStorage.getItem('isMobile')) {
    isMobile.value = JSON.parse(localStorage.getItem('isMobile'));
    isDesktop.value = JSON.parse(localStorage.getItem('isDesktop'));
  } else {
    // Inicializar el estado correcto según el tamaño actual del documento
    updateDeviceState();
  }
  window.addEventListener('resize', handleResize);
  console.log("onMounted");
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  console.log("onUnmounted");
});

watch(documentWidth, (newValue, oldValue) => {
  updateDeviceState();
});

</script>

<template>
  <header :class="['eme-header', mode.isLightMode ? 'eme-nav-light' : 'eme-nav-dark']">
    <nav class="eme-nav">
      <div class="nav-logo m-plus-rounded-1c-bold eme-orizontal logo">
        <div class="emerald dimension"></div>
        <p class="header-font header-title">{{ name.homePage }}</p>
      </div>
      <div class="eme-orizontal m-plus-rounded-1c-bold">
        <!-- Work Experience -->
        <div v-if="isDesktop" @click="$emit('showOptions')" class="eme-btn eme-orizontal header-element ">
          <img :src="mode.isLightMode ? vueLightTheme : vueDarkTheme" alt="menu.svg" />
          <p class="header-font underline-p">Work Experience</p>
        </div>
        <!-- 
        <div class="eme-br animate__fadeOutRight"></div> -->

        <!-- Linkedin -->
        <div v-if="isDesktop" @click="$emit('showOptions')" class="eme-btn eme-orizontal header-element">
          <img :src="mode.isLightMode ? linkeLightTheme : linkeDarkTheme" alt="menu.svg" />
          <p class="header-font underline-p">Linkedin</p>
        </div>

        <!-- GitHub -->
        <div v-if="isDesktop" @click="$emit('showOptions')" class="eme-btn eme-orizontal header-element">
          <img :src="mode.isLightMode ? gitHubLightTheme : gitHubDarkTheme" alt="menu.svg" />
          <p class="header-font underline-p">Source</p>
        </div>

        <!-- Theme  -->
        <div @click="$emit('changeMode')" class="eme-nav-theme eme-btn eme-orizontal header-element">
          <img :src="mode.isLightMode ? sunLightTheme : moonDarkTheme" alt="mode.svg" />
          <!-- <p v-if="isDesktop" class="header-font underline-p">Dark</p> -->
        </div>

        <!-- Menu -->
        <p v-if="isMobile" @click="$emit('showOptions')" class="eme-btn ">
          <img :src="mode.isLightMode ? menuLightTheme : menuDarkTheme" alt="menu.svg" />
        </p>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header-title {

  border-bottom: 2px solid #008b8b;
}

.eme-btn {
  align-items: center;
}

.eme-btn:hover {
  transition: 0.1s;
  scale: 110%;
  cursor: pointer;
}

.emerald {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #50c878, #7fffd4, #008b8b, #50c878);
  background-size: 400% 400%;
  animation: sparkle 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%);
  font-size: 24px;
  color: black;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.5),
    inset 5px 5px 15px rgba(0, 0, 0, 0.3),
    inset -5px -5px 15px rgba(255, 255, 255, 0.3);
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

.dimension {
  width: 4rem;
  height: 3.8rem;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-font {
  font-size: 1.8rem;
}

.header-element {
  margin: 0 1.5rem;
}

/* img */

img {
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}

img.transitioning {
  opacity: 0;
}

/* fade  */
/* .underline-p {
  border-bottom: 2px solid transparent;
  transition: border-bottom 1s ease;
}

.underline-p:hover {
  border-bottom: 2px solid #008b8b;
} */

/* Bar */
.underline-p {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.underline-p::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #008b8b;
  transition: width 0.3s ease;
}

.underline-p:hover::after {
  width: 100%;

}
</style>
