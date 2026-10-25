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
        'aula-01-atividade-01': caminhoAbsoluto('./src/aula-01/atividade-01/index.html'),
        'aula-01-atividade-01-2': caminhoAbsoluto('./src/aula-01/atividade-01-2/index.html'),
        'aula-02-atividade-02-1': caminhoAbsoluto('./src/aula-02/atividade-02-1/index.html'),
        'aula-02-atividade-02-2': caminhoAbsoluto('./src/aula-02/atividade-02-2/index.html'),
        'aula-02-atividade-02-3': caminhoAbsoluto('./src/aula-02/atividade-02-3/index.html'),
        'aula-02-atividade-02-4': caminhoAbsoluto('./src/aula-02/atividade-02-4/index.html'),
        'aula-02-atividade-02-5': caminhoAbsoluto('./src/aula-02/atividade-02-5/index.html'),
        'aula-02-atividade-02-6': caminhoAbsoluto('./src/aula-02/atividade-02-6/index.html'),
        'aula-03-atividade-03-1': caminhoAbsoluto('./src/aula-03/atividade-03-1/index.html'),
        'aula-03-atividade-03-2': caminhoAbsoluto('./src/aula-03/atividade-03-2/index.html'),
        'aula-03-atividade-03-3': caminhoAbsoluto('./src/aula-03/atividade-03-3/index.html'),
        'aula-04-atividade-04-1': caminhoAbsoluto('./src/aula-04/atividade-04-1/index.html'),
        'aula-04-atividade-04-2': caminhoAbsoluto('./src/aula-04/atividade-04-2/index.html'),
        'aula-04-atividade-04-3': caminhoAbsoluto('./src/aula-04/atividade-04-3/index.html'),
        'aula-04-atividade-04-4': caminhoAbsoluto('./src/aula-04/atividade-04-4/index.html'),
        'aula-05-atividade-05-1': caminhoAbsoluto('./src/aula-05/atividade-05-1/index.html'),
        'aula-05-atividade-05-2': caminhoAbsoluto('./src/aula-05/atividade-05-2/index.html'),
        'aula-06-atividade-06-1': caminhoAbsoluto('./src/aula-06/atividade-06-1/index.html'),
        'aula-06-atividade-06-2': caminhoAbsoluto('./src/aula-06/atividade-06-2/index.html'),
        'aula-06-atividade-06-3': caminhoAbsoluto('./src/aula-06/atividade-06-3/index.html'),
      },
    },
  },
});
