import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    environment: 'node',
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
      reporter: ['text', 'json', 'html'],
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
    projects: [
      'src/*/vitest.config.js',
      {
        test: {
          include: ['**/*.unit.test.ts'],
          name: 'unit',
          environment: 'node'
        }
      },
      {
        test: {
          include: ['**/*.integration.test.ts'],
          name: 'integration',
          environment: 'node'
        }
      },
      {
        test: {
          include: ['**/*.unit.test.ts', '**/*.integration.test.ts'],
          name: 'unit-integration',
          environment: 'node'
        }
      },
      {
        test: {
          include: ['**/*.e2e.test.ts'],
          name: 'e2e',
          environment: 'node'
        }
      }
    ]
  },
  plugins: [tsconfigPaths()]
});
