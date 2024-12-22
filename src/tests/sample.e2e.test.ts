import { describe, it, expect } from 'vitest';

describe(`E2E test suite`, () => {
  it(`should return true`, async () => {
    const actual = true;

    expect(actual).toBeTruthy();
  });
});
