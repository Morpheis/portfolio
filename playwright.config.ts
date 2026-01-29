import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Ken Zink Portfolio
 * 
 * Run with: npx playwright test
 * Base URL is configurable via BASE_URL environment variable
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    // Configurable base URL - defaults to local dev server
    baseURL: process.env.BASE_URL || 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'zfold-folded',
      use: {
        viewport: { width: 373, height: 839 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: 'zfold-unfolded',
      use: {
        viewport: { width: 717, height: 839 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
    },
  ],

  // Run local dev server before tests if not already running
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
