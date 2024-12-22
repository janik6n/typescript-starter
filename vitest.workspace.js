import { defineWorkspace } from 'vitest/config';
export default defineWorkspace([
  'src/*/vitest.config.js',
  {
    extends: './vitest.config.js',
    test: {
      include: ['**/*.unit.test.ts'],
      name: 'unit',
      environment: 'node'
    }
  },
  {
    extends: './vitest.config.js',
    test: {
      include: ['**/*.integration.test.ts'],
      name: 'integration',
      environment: 'node'
    }
  },
  {
    extends: './vitest.config.js',
    test: {
      include: ['**/*.unit.test.ts', '**/*.integration.test.ts'],
      name: 'unit-integration',
      environment: 'node'
    }
  },
  {
    extends: './vitest.config.js',
    test: {
      include: ['**/*.e2e.test.ts'],
      name: 'e2e',
      environment: 'node'
    }
  }
]);
