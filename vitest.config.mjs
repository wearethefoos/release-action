import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.{spec,test}.ts'],
    root: '.',
    coverage: {
      enabled: true,
      all: true
    },
    globals: true,
    fileParallelism: false,
    env: {
      ...process.env
    }
  }
})
