import * as React from 'react';

import { test, expect } from '@playwright/experimental-ct-react';
import { App } from './App';

test('should work', async ({ mount, page }) => {
  const component = await mount(<App />);
  await expect(page).toHaveScreenshot();
  await expect(component).toContainText('Learn React');
});