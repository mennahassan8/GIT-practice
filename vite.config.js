import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/GIT-practice/',
  plugins: [svelte()],
  build: {
    outDir: 'build' 
  }
})


