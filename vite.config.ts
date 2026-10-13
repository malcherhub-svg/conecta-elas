import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/conecta-elas/',
  plugins: [react()],
  test: { environment: 'jsdom', setupFiles: './src/test-setup.ts' },
});
