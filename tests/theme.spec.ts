import { test, expect } from './fixtures/test-fixtures';

/**
 * Theme toggle tests
 */
test.describe('Theme Toggle', () => {
  test('theme toggle button is visible', async ({ portfolioPage }) => {
    await expect(portfolioPage.themeToggle).toBeVisible();
  });

  test('starts in dark mode by default', async ({ portfolioPage }) => {
    const isDark = await portfolioPage.isDarkMode();
    expect(isDark).toBe(true);
  });

  test('toggle shows "Light" text in dark mode', async ({ portfolioPage }) => {
    await expect(portfolioPage.themeToggle).toContainText('Light');
  });

  test('clicking toggle switches to light mode', async ({ portfolioPage }) => {
    await portfolioPage.toggleTheme();
    
    const isLight = await portfolioPage.isLightMode();
    expect(isLight).toBe(true);
  });

  test('toggle shows "Dark" text in light mode', async ({ portfolioPage }) => {
    await portfolioPage.toggleTheme();
    
    await expect(portfolioPage.themeToggle).toContainText('Dark');
  });

  test('clicking toggle twice returns to dark mode', async ({ portfolioPage }) => {
    await portfolioPage.toggleTheme(); // dark -> light
    await portfolioPage.toggleTheme(); // light -> dark
    
    const isDark = await portfolioPage.isDarkMode();
    expect(isDark).toBe(true);
  });

  test('theme changes affect visual appearance', async ({ portfolioPage }) => {
    // Verify the app has dark class initially
    await expect(portfolioPage.page.locator('.app.dark')).toBeVisible();
    
    await portfolioPage.toggleTheme();
    
    // After toggle, should have light class instead
    await expect(portfolioPage.page.locator('.app.light')).toBeVisible();
    await expect(portfolioPage.page.locator('.app.dark')).not.toBeVisible();
  });
});
