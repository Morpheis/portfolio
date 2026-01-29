import { test, expect } from './fixtures/test-fixtures';

/**
 * Responsive layout tests
 * These run across different viewport sizes defined in playwright.config.ts
 */
test.describe('Responsive Layout', () => {
  test('footer is reachable by scrolling', async ({ portfolioPage }) => {
    // Scroll to footer
    await portfolioPage.footer.scrollIntoViewIfNeeded();
    
    // Verify footer is visible
    await expect(portfolioPage.footer).toBeVisible();
  });

  test('all main sections are reachable by scrolling', async ({ portfolioPage }) => {
    const sections = [
      portfolioPage.hero,
      portfolioPage.experienceSection,
      portfolioPage.skillsSection,
      portfolioPage.contactSection,
      portfolioPage.footer,
    ];

    for (const section of sections) {
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
    }
  });

  test('profile image remains visible', async ({ portfolioPage }) => {
    await expect(portfolioPage.profileImage).toBeVisible();
  });

  test('theme toggle remains accessible', async ({ portfolioPage }) => {
    await expect(portfolioPage.themeToggle).toBeVisible();
    
    // Should be clickable
    await portfolioPage.toggleTheme();
    const isLight = await portfolioPage.isLightMode();
    expect(isLight).toBe(true);
  });

  test('contact cards are tappable', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.contactSection);
    
    const firstCard = portfolioPage.contactCards.first();
    await expect(firstCard).toBeVisible();
    
    // Verify it has an href (is a link)
    const href = await firstCard.getAttribute('href');
    expect(href).toBeTruthy();
  });

  test('text remains readable (not cut off)', async ({ portfolioPage }) => {
    // Check that key text elements have content
    const name = await portfolioPage.profileName.textContent();
    const title = await portfolioPage.profileTitle.textContent();
    
    expect(name?.length).toBeGreaterThan(0);
    expect(title?.length).toBeGreaterThan(0);
  });
});
