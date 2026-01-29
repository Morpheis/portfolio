import { test, expect } from './fixtures/test-fixtures';

/**
 * Smoke tests - verify the page loads and critical elements are visible
 */
test.describe('Smoke Tests', () => {
  test('page loads successfully', async ({ portfolioPage }) => {
    await expect(portfolioPage.page).toHaveTitle(/Ken Zink/);
  });

  test('sidebar is visible', async ({ portfolioPage }) => {
    await expect(portfolioPage.sidebar).toBeVisible();
  });

  test('main content is visible', async ({ portfolioPage }) => {
    await expect(portfolioPage.mainContent).toBeVisible();
  });

  test('no console errors on page load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(errors).toHaveLength(0);
  });
});
