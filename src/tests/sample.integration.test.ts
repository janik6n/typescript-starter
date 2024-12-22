import { describe, it, expect } from 'vitest';

describe(`Integration test suite`, () => {
  it(`should return true`, async () => {
    const actual = true;

    expect(actual).toBeTruthy();
  });
  it(`should return false`, async () => {
    const actual = false;

    expect(actual).toBeFalsy();
  });
});
