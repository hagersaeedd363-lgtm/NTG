import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// One self-contained HTML file (code and styles inlined) that opens with a double-click.
// Images are embedded afterwards by scripts/embed-assets.mjs.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: { outDir: 'dist-single', emptyOutDir: true, copyPublicDir: false },
});
