import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // globals: true,
    environment: 'node',
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
      reporter: ['text', 'json', 'html'],
      all: true,
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
});
