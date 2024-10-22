<script setup lang="ts">
import { ref } from 'vue';
import BodyCo from '@/components/BodyCo.vue';
import HeaderCo from '@/components/HeaderCo.vue';
import FooterCo from '@/components/FooterCo.vue';

const isLightMode = ref(true); // Variable reactiva para controlar el modo

const changeMode = () => {
    isLightMode.value = !isLightMode.value; // Cambia entre modo claro y oscuro
    console.log("changeMode");
};

const showOptions = () => {
    console.log("showOptions");
};
</script>

<template>
    <div :class="['principal-trasition', isLightMode ? 'eme-light' : 'eme-dark']">
        <HeaderCo @change-mode="changeMode" @show-options="showOptions" />
        <BodyCo />
    </div>

    <FooterCo />
</template>
