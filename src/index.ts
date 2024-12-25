import process from 'node:process';

import type { Config } from './models/config-model.js';
import { validateConfig } from './utils/utils.js';

// Handle SIGINT & SIGTERM signals
const cleanup = () => {
  console.log('\nPerforming cleanup...');
  // Add cleanup logic here
  process.exit(0);
};

// Handle signals
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT (Ctrl+C)');
  cleanup();
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM');
  cleanup();
});

const serverConfig: Config = {
  id: `srv-1`,
  description: `Config for Server-1`,
  count: 3
};

(async function () {
  console.log(`Begin processing.`);

  // As an example (see Dockerfile) when the app is running in containerized environment, the CONTAINERIZED env variable is set to true
  console.log(`ENV CONTAINERIZED: ${process.env.CONTAINERIZED}`);

  const validationResult = await validateConfig(serverConfig);
  if (validationResult) {
    console.log(`Server config is valid!`);
  } else {
    console.log(`Server config is not valid!`);
  }

  // Artificial delay so you have time to test signals.
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  console.log(`Processing ready.`);
})();
