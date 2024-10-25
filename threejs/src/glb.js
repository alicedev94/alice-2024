import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Hacer que el fondo sea transparente
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controles de órbita
const controls = new OrbitControls(camera, renderer.domElement);

// Añadir luz
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Cargar modelo GLB
const loader = new GLTFLoader();
let model;

loader.load('/dog/dog.glb', (gltf) => {
  model = gltf.scene;
  scene.add(model);
  model.position.set(0, 0, 0);
}, undefined, (error) => {
  console.error('Error al cargar el modelo:', error);
});

// Posición de la cámara
camera.position.z = 5;

// Animación
function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.y += 0.01; // Rota el modelo en el eje Y
  }

  controls.update(); // Actualiza los controles
  renderer.render(scene, camera);
}

// Inicia la animación
animate();
