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
        'atividade-01-2': caminhoAbsoluto('./src/atividade-01-2.html'),
        'atividade-02-1': caminhoAbsoluto('./src/atividade-02-1.html'),
        'atividade-02-2': caminhoAbsoluto('./src/atividade-02-2.html'),
        'atividade-02-3': caminhoAbsoluto('./src/atividade-02-3.html'),
        'atividade-02-4': caminhoAbsoluto('./src/atividade-02-4.html'),
        'atividade-02-5': caminhoAbsoluto('./src/atividade-02-5.html'),
        'atividade-02-6': caminhoAbsoluto('./src/atividade-02-6.html'),
        'atividade-03-1': caminhoAbsoluto('./src/atividade-03-1.html'),
        'atividade-03-2': caminhoAbsoluto('./src/atividade-03-2.html'),
        'atividade-03-3': caminhoAbsoluto('./src/atividade-03-3.html'),
      },
    },
  },
});
