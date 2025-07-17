import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';


const repoName = 'GIT-practice';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [svelte()],
});



