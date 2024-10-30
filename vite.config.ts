import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import gltf from 'vite-plugin-gltf';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    gltf({
      transforms: [
        // Aquí puedes agregar transformaciones si es necesario
      ],
    }),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/aincrad/*.obj', dest: 'assets/aincrad' },
        { src: 'src/assets/aincrad/*.mtl', dest: 'assets/aincrad' }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  assetsInclude: ['**/*.glb', '**/*.obj', '**/*.mtl'],
});
