// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // Maximum time each test can run
  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: [
    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never',
      },
    ],
    [
      'junit',
      {
        outputFile: 'test-results/junit-results.xml',
      },
    ],
  ],

  use: {
    browserName: 'webkit',
    headless: true,
  },
});