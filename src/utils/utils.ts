import type { Config } from '../models/config-model.js';

export const validateConfig = async (config: Config): Promise<boolean> => {
  if ('id' in config) {
    if (config[`id`].startsWith(`srv`)) {
      return true;
    }
  }
  return false;
};

export const notTestedFunction = async (): Promise<void> => {
  console.log(`hey`);
};
