import { test, expect } from './fixtures/test-fixtures';
import { STATS } from './fixtures/test-data';

/**
 * Hero section tests
 */
test.describe('Hero Section', () => {
  test('hero section is visible', async ({ portfolioPage }) => {
    await expect(portfolioPage.hero).toBeVisible();
  });

  test('displays hero title', async ({ portfolioPage }) => {
    await expect(portfolioPage.heroTitle).toBeVisible();
    // Check for key words in the title
    await expect(portfolioPage.heroTitle).toContainText('Quality');
    await expect(portfolioPage.heroTitle).toContainText('Engineering');
  });

  test('displays hero description', async ({ portfolioPage }) => {
    await expect(portfolioPage.heroDescription).toBeVisible();
    const text = await portfolioPage.heroDescription.textContent();
    expect(text?.length).toBeGreaterThan(50);
  });

  test.describe('Stats', () => {
    test('displays three stat cards', async ({ portfolioPage }) => {
      await expect(portfolioPage.heroStats).toHaveCount(3);
    });

    test('displays experience stat', async ({ portfolioPage }) => {
      const stats = portfolioPage.hero.locator('.stat');
      await expect(stats.filter({ hasText: STATS.experience })).toBeVisible();
    });

    test('displays test coverage stat', async ({ portfolioPage }) => {
      const stats = portfolioPage.hero.locator('.stat');
      await expect(stats.filter({ hasText: STATS.testCoverage })).toBeVisible();
    });

    test('displays defect reduction stat', async ({ portfolioPage }) => {
      const stats = portfolioPage.hero.locator('.stat');
      await expect(stats.filter({ hasText: STATS.defectReduction })).toBeVisible();
    });
  });

  test('displays scroll prompt', async ({ portfolioPage }) => {
    await expect(portfolioPage.scrollPrompt).toBeVisible();
    await expect(portfolioPage.scrollPrompt).toContainText('Scroll');
  });
});
