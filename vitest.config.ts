/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    fileParallelism: false,
    include: ['./tests/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
