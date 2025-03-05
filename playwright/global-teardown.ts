import { downAll } from 'docker-compose';

import path from 'node:path';

async function globalTeardown() {
  console.log('Running global teardown...');
  await downAll({ config: path.resolve('playwright/docker-compose.yml'), log: true });
  console.log('Global teardown finished!');
}

// eslint-disable-next-line import/no-default-export
export default globalTeardown;
