import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const caminhoAbsoluto = (relativo) =>
  fileURLToPath(new URL(relativo, import.meta.url));

export default defineConfig({
  root: 'src',
  publicDir: false,
  base: './',

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: caminhoAbsoluto('./dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: caminhoAbsoluto('./src/index.html'),
        'atividade-01': caminhoAbsoluto('./src/atividade-01.html'),
        'atividade-02': caminhoAbsoluto('./src/atividade-02.html'),
      },
    },
  },
});
