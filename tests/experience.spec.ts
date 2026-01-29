import { test, expect } from './fixtures/test-fixtures';
import { COMPANIES } from './fixtures/test-data';

/**
 * Experience section tests
 */
test.describe('Experience Section', () => {
  test('experience section is visible', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.experienceSection);
    await expect(portfolioPage.experienceSection).toBeVisible();
  });

  test('displays all companies', async ({ portfolioPage }) => {
    const companyNames = await portfolioPage.getCompanyNames();
    
    for (const company of COMPANIES) {
      expect(companyNames).toContain(company);
    }
  });

  test('displays correct number of company blocks', async ({ portfolioPage }) => {
    await expect(portfolioPage.companyBlocks).toHaveCount(COMPANIES.length);
  });

  test('each company block has a header with icon', async ({ portfolioPage }) => {
    const headers = portfolioPage.page.locator('.company-header');
    const count = await headers.count();
    
    expect(count).toBe(COMPANIES.length);
    
    for (let i = 0; i < count; i++) {
      const icon = headers.nth(i).locator('.company-icon');
      await expect(icon).toBeVisible();
    }
  });

  test('role cards are visible for each company', async ({ portfolioPage }) => {
    const roleCards = await portfolioPage.roleCards.count();
    // We have multiple roles at some companies
    expect(roleCards).toBeGreaterThanOrEqual(COMPANIES.length);
  });

  test('role cards display title and dates', async ({ portfolioPage }) => {
    const firstRole = portfolioPage.roleCards.first();
    await portfolioPage.scrollToSection(firstRole);
    
    const title = firstRole.locator('.role-title');
    const dates = firstRole.locator('.role-dates');
    
    await expect(title).toBeVisible();
    await expect(dates).toBeVisible();
  });

  test('role cards display highlights', async ({ portfolioPage }) => {
    const firstRole = portfolioPage.roleCards.first();
    await portfolioPage.scrollToSection(firstRole);
    
    const highlights = firstRole.locator('.role-highlights li');
    const count = await highlights.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('Hashbranch is listed first (most recent)', async ({ portfolioPage }) => {
    const firstCompany = portfolioPage.companyBlocks.first();
    const companyName = firstCompany.locator('.company-name');
    
    await expect(companyName).toHaveText('Hashbranch, Inc.');
  });
});
