import { upAll, logs } from 'docker-compose';

import path from 'node:path';

async function waitForWsEndpoint() {
  while (true) {
    const { out } = await logs('playwright', {
      config: path.resolve('playwright/docker-compose.yml'),
      log: true,
    });

    if (out.includes('Listening on ws://')) {
      break;
    }
  }
}

async function globalSetup() {
  console.log('Running global setup...');
  await upAll({
    config: path.resolve('playwright/docker-compose.yml'),
    log: true,
  });
  await waitForWsEndpoint();
  console.log('Global setup finished!');
}

// eslint-disable-next-line import/no-default-export
export default globalSetup;
