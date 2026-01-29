import { test, expect } from './fixtures/test-fixtures';
import { CONTACT_LINKS } from './fixtures/test-data';

/**
 * Contact section tests
 */
test.describe('Contact Section', () => {
  test('contact section is visible', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.contactSection);
    await expect(portfolioPage.contactSection).toBeVisible();
  });

  test('displays section title', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.contactSection);
    const title = portfolioPage.contactSection.locator('.section-title');
    await expect(title).toContainText('Connect');
  });

  test('displays three contact cards', async ({ portfolioPage }) => {
    await expect(portfolioPage.contactCards).toHaveCount(3);
  });

  test('contact cards have correct hrefs', async ({ portfolioPage }) => {
    const hrefs = await portfolioPage.getContactLinkHrefs();
    
    for (const expectedHref of CONTACT_LINKS) {
      expect(hrefs).toContain(expectedHref);
    }
  });

  test('contact cards display name and description', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.contactSection);
    const cards = await portfolioPage.contactCards.all();
    
    for (const card of cards) {
      const name = card.locator('h3');
      const description = card.locator('p');
      
      await expect(name).toBeVisible();
      await expect(description).toBeVisible();
    }
  });

  test('journey end section is visible', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.journeyEnd);
    await expect(portfolioPage.journeyEnd).toBeVisible();
  });

  test('journey end displays summary text', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.journeyEnd);
    await expect(portfolioPage.journeyEnd).toContainText('15+ years');
  });
});

test.describe('Footer', () => {
  test('footer is visible', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.footer);
    await expect(portfolioPage.footer).toBeVisible();
  });

  test('footer contains copyright', async ({ portfolioPage }) => {
    await expect(portfolioPage.footer).toContainText('Ken Zink');
    await expect(portfolioPage.footer).toContainText('©');
  });

  test('footer contains current year', async ({ portfolioPage }) => {
    const currentYear = new Date().getFullYear().toString();
    await expect(portfolioPage.footer).toContainText(currentYear);
  });
});
