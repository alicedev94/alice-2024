<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import model1 from '@/assets/dog/dog.glb';

// const threeContainer = ref<HTMLElement | null>(null);

// onMounted(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });

//     if (threeContainer.value) {
//         const { clientWidth: width, clientHeight: height } = threeContainer.value;
//         renderer.setSize(width, height);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         threeContainer.value.appendChild(renderer.domElement);
//     }

//     const controls = new OrbitControls(camera, renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 10, 7.5);
//     scene.add(directionalLight);

//     const dracoLoader = new DRACOLoader();
//     dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

//     const loader = new GLTFLoader();
//     loader.setDRACOLoader(dracoLoader);
//     let model: THREE.Group | undefined;

//     loader.load(model1, (gltf) => {
//         model = gltf.scene;
//         scene.add(model);
//         model.position.set(0, -2, -1);
//     }, undefined, (error) => {
//         console.error('Error al cargar el modelo:', error);
//     });

//     camera.position.z = 5;

//     function resizeRendererToDisplaySize() {
//         if (threeContainer.value) {
//             const width = threeContainer.value.clientWidth;
//             const height = threeContainer.value.clientHeight;
//             const needResize = renderer.domElement.width !== width || renderer.domElement.height !== height;
//             if (needResize) {
//                 renderer.setSize(width, height, false);
//                 camera.aspect = width / height;
//                 camera.updateProjectionMatrix();
//             }
//         }
//     }

//     function animate() {
//         resizeRendererToDisplaySize();
//         requestAnimationFrame(animate);
//         if (model) {
//             model.rotation.y -= 0.01;
//         }
//         controls.update();
//         renderer.render(scene, camera);
//     }

//     animate();

//     onUnmounted(() => {
//         renderer.dispose();
//         if (threeContainer.value) {
//             threeContainer.value.removeChild(renderer.domElement);
//         }
//     });
// });
</script>

<template>
    <div class="content-model">
        <div class="model" ref="threeContainer"></div>
    </div>
</template>

<style scoped>
.content-model {
    display: flex;
    justify-content: center;
    height: 40rem;
    width: 100%;
}

.model {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 30rem;
    width: 50rem;
    position: relative;
    overflow: hidden;
}
</style>
