import { describe, it, expect } from 'vitest';

import type { Config } from '../models/config-model.js';
import { validateConfig } from './utils.js';

describe(`Utils test suite`, () => {
  it(`should return true for valid Config object`, async () => {
    const testConfig: Config = {
      id: `srv-1`,
      description: `Config for Server-1`,
      count: 1
    };

    const sut = validateConfig;

    const actual = await sut(testConfig);

    expect(actual).toBeTruthy();
  });

  it(`should return false for invalid Config object`, async () => {
    const testConfig: Config = {
      id: `notsrv-1`,
      description: `Config for Not-Server-1`,
      count: 1
    };

    const sut = validateConfig;

    const actual = await sut(testConfig);

    expect(actual).toBeFalsy();
  });
});
