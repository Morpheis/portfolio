import { test, expect } from './fixtures/test-fixtures';
import { SKILL_CATEGORIES } from './fixtures/test-data';

/**
 * Skills section tests
 */
test.describe('Skills Section', () => {
  test('skills section is visible', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.skillsSection);
    await expect(portfolioPage.skillsSection).toBeVisible();
  });

  test('displays section title', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.skillsSection);
    const title = portfolioPage.skillsSection.locator('.section-title');
    await expect(title).toContainText('Skills');
  });

  test('displays all skill categories', async ({ portfolioPage }) => {
    const categoryTitles = await portfolioPage.getSkillCategoryTitles();
    
    for (const category of SKILL_CATEGORIES) {
      expect(categoryTitles.map(t => t.toUpperCase())).toContain(category.toUpperCase());
    }
  });

  test('displays correct number of skill categories', async ({ portfolioPage }) => {
    await expect(portfolioPage.skillCategories).toHaveCount(SKILL_CATEGORIES.length);
  });

  test('each skill category has tags', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.skillsSection);
    const categories = await portfolioPage.skillCategories.all();
    
    for (const category of categories) {
      const tags = category.locator('.skill-tag');
      const count = await tags.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test('education block is visible', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.educationBlock);
    await expect(portfolioPage.educationBlock).toBeVisible();
  });

  test('education block contains school name', async ({ portfolioPage }) => {
    await portfolioPage.scrollToSection(portfolioPage.educationBlock);
    await expect(portfolioPage.educationBlock).toContainText('Boise State University');
  });
});
