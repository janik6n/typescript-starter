import type { Config } from './models/config-model.js';
import { validateConfig } from './utils/utils.js';

const serverConfig: Config = {
  id: `srv-1`,
  description: `Config for Server-1`,
  count: 3
};

(async function () {
  console.log(`Begin processing.`);

  const validationResult = await validateConfig(serverConfig);
  if (validationResult) {
    console.log(`Server config is valid!`);
  } else {
    console.log(`Server config is not valid!`);
  }

  console.log(`Processing ready.`);
})();
