// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`, // Mantenha esta linha se precisar injetar React em alguns casos
    loader: 'jsx', // Ajuste para uma string
  },
});
