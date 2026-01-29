import { test as base } from '@playwright/test';
import { PortfolioPage } from './portfolio-page';

/**
 * Extended test fixture that provides PortfolioPage to all tests
 */
export const test = base.extend<{ portfolioPage: PortfolioPage }>({
  portfolioPage: async ({ page }, use) => {
    const portfolioPage = new PortfolioPage(page);
    await portfolioPage.goto();
    await use(portfolioPage);
  },
});

export { expect } from '@playwright/test';
