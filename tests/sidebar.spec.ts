import { test, expect } from './fixtures/test-fixtures';
import { PROFILE, SOCIAL_LINKS } from './fixtures/test-data';

/**
 * Sidebar component tests
 */
test.describe('Sidebar', () => {
  test.describe('Profile Section', () => {
    test('displays profile image', async ({ portfolioPage }) => {
      await expect(portfolioPage.profileImage).toBeVisible();
      await expect(portfolioPage.profileImage).toHaveAttribute('alt', PROFILE.name);
    });

    test('displays correct name', async ({ portfolioPage }) => {
      await expect(portfolioPage.profileName).toHaveText(PROFILE.name);
    });

    test('displays correct title', async ({ portfolioPage }) => {
      await expect(portfolioPage.profileTitle).toHaveText(PROFILE.title);
    });

    test('displays location', async ({ portfolioPage }) => {
      await expect(portfolioPage.location).toContainText(PROFILE.location);
    });
  });

  test.describe('Social Links', () => {
    test('displays three social links', async ({ portfolioPage }) => {
      await expect(portfolioPage.socialLinks).toHaveCount(3);
    });

    test('social links have correct hrefs', async ({ portfolioPage }) => {
      const hrefs = await portfolioPage.getSocialLinkHrefs();
      
      expect(hrefs).toContain(SOCIAL_LINKS.linkedin);
      expect(hrefs).toContain(SOCIAL_LINKS.github);
      expect(hrefs).toContain(SOCIAL_LINKS.email);
    });

    test('external social links open in new tab', async ({ portfolioPage }) => {
      const linkedinLink = portfolioPage.socialLinks.first();
      await expect(linkedinLink).toHaveAttribute('target', '_blank');
      await expect(linkedinLink).toHaveAttribute('rel', /noopener/);
    });
  });

  test.describe('About Section', () => {
    test('about section is visible', async ({ portfolioPage }) => {
      await expect(portfolioPage.aboutSection).toBeVisible();
    });

    test('about section has header', async ({ portfolioPage }) => {
      const header = portfolioPage.aboutSection.locator('h3');
      await expect(header).toHaveText('About Me');
    });

    test('about section has content paragraphs', async ({ portfolioPage }) => {
      const paragraphs = portfolioPage.aboutSection.locator('p');
      const count = await paragraphs.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });
  });
});
