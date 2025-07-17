import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/GIT-practice/',  // Must match your repo name exactly
  plugins: [svelte()],
});

